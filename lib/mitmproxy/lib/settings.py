import os
import yaml
import pdb

from watchdog.observers import Observer
from watchdog.events import PatternMatchingEventHandler

from .logger import Logger

class Settings:
    LOG_ID = 'lib.settings'

    # Environment variable versions of configuration.
    ACTIVE_MODE = 'SCENARIOS_ACTIVE_MODE'
    IS_HEADLESS = 'SCENARIOS_IS_HEADLESS'
    API_URL = 'SCENARIOS_API_URL'
    API_KEY = 'SCENARIOS_API_KEY'
    PROXY_INCLUDE_PATTERNS = 'SCENARIOS_PROXY_INCLUDE_PATTERNS'
    PROXY_EXCLUDE_PATTERNS = 'SCENARIOS_PROXY_EXCLUDE_PATTERNS'
    PROXY_POLICY = 'SCENARIOS_PROXY_POLICY'
    PROXY_SERVICE_URL = 'SCENARIOS_PROXY_SERVICE_URL'
    PROXY_PROJECT_KEY = 'SCENARIOS_PROXY_PROJECT_KEY'
    PROXY_SCENARIO_KEY = 'SCENARIOS_PROXY_SCENARIO_KEY'

    _instance = None

    def __init__(self):
        if Settings._instance:
            raise RuntimeError('Call instance() instead')
        else:
            cwd = os.path.dirname(os.path.realpath(__file__))

            self.config_file_path = os.path.join(cwd, '..', '..', '..', 'config', 'settings.yml')

            self.__load_config()
            self.__observe_config()

    # Headless means the agent is packaged without the frontend and
    # supports configuration with environment variables or the yaml file.
    def is_headless(self):
        if os.environ.get(self.IS_HEADLESS):
            return True

        return False

    @classmethod
    def instance(cls):
        if cls._instance is None:
            cls._instance = cls()

        return cls._instance

    @property
    def agent_url(self):
        return self.config.get('agent_url')

    @property
    def api_url(self):
        if self.is_headless() and os.environ.get(self.API_URL):
            return os.environ[self.API_URL]

        return self.config.get('api_url')

    @property
    def api_key(self):
        if self.is_headless() and os.environ.get(self.API_KEY):
            return os.environ[self.API_KEY]

        return self.config.get('api_key')

    @property
    def mode(self):
        return self.config.get('mode')

    @property
    def active_mode(self):
        mode = self.mode

        if not mode:
            return None
        else:
            if self.is_headless() and os.environ.get(self.ACTIVE_MODE):
                return os.environ[self.ACTIVE_MODE]

            return mode.get('active')

    # Get active mode settings first from environment variables
    # If the env var is null, get the setting from the yaml file
    @property
    def active_mode_settings(self):
        mode = self.mode

        if not mode:
            return None

        active_mode = self.active_mode

        if not active_mode:
            return None

        if self.is_headless():
            # Get settings from yaml file, replace setting with env var if set
            active_mode_settings = mode.get(active_mode)

            include_patterns = os.environ.get(self.PROXY_INCLUDE_PATTERNS)
            if include_patterns != None:
                # Split the string based on commas, strip whitespace
                active_mode_settings['include_patterns'] = list(map(str.strip, include_patterns.split(',')))

            exclude_patterns = os.environ.get(self.PROXY_EXCLUDE_PATTERNS)
            if exclude_patterns != None:
                # Split the string based on commas, strip whitespace
                active_mode_settings['exclude_patterns'] = list(map(str.strip, exclude_patterns.split(',')))

            policy = os.environ.get(self.PROXY_POLICY)
            if policy != None:
                active_mode_settings['policy'] = policy

            proxy_service_url = os.environ.get(self.PROXY_SERVICE_URL)
            if proxy_service_url != None:
                active_mode_settings['service_url'] = proxy_service_url

            proxy_project_key = os.environ.get(self.PROXY_PROJECT_KEY)
            if proxy_project_key != None:
                active_mode_settings['project_key'] = proxy_project_key

            proxy_scenario_key = os.environ.get(self.PROXY_SCENARIO_KEY)
            if proxy_scenario_key != None:
                active_mode_settings['scenario_key'] = proxy_scenario_key

            return active_mode_settings

        return mode.get(active_mode)

    def reload_config(self, event):
        Logger.instance().info(f"{self.LOG_ID}.reload_config")
        self.__load_config()

    def __load_config(self):
        with open(self.config_file_path, 'r') as stream:
            try:
                self.config = yaml.safe_load(stream)
            except yaml.YAMLError as exc:
                pass

    def __observe_config(self):
        patterns = "*"
        ignore_patterns = ""
        ignore_directories = False
        case_sensitive = True
        event_handler = PatternMatchingEventHandler(patterns, ignore_patterns, ignore_directories, case_sensitive)

        event_handler.on_modified = self.reload_config

        observer = Observer()
        observer.schedule(event_handler, self.config_file_path)
        observer.start()
