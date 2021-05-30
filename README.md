# Stoobly Agent

Record requests to Stoobly and mock requests

## Proxy Installation

* Install pipx

    ```
    sudo apt-get install pipx
    ```

* Install mitmproxy

    ```
    pipx install mitmproxy
    ```

* Inject pip packages into mitmproxy

    ```
    pipx inject mitmproxy requests pyyaml watchdog
    ```

## UI Installation

* Install Ruby 2.6.5 with [rvm](https://rvm.io/rvm/install)

    ```
    rvm install ruby-2.6.5
    ```

* Install bundler
    
    ```
    gem install bundler
    ```

* Instrall dependencies

    ```
    bundle install
    ```

## Usage

```
bin/run.sh
```
