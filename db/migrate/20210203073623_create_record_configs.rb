class CreateRecordConfigs < ActiveRecord::Migration[6.0]
  def change
    create_table :record_configs do |t|
      t.string :environment, null: false, default: 'development'
      t.string :scenarios_api_key, null: false
      t.string :scenarios_project_key, null: false
      t.string :scenarios_record_policy, null: false, default: 'any'
      t.string :scenarios_record_match_pattern
      t.string :scenarios_scenario_key
      t.string :scenarios_url, null: false
      t.string :service_url, null: false

      t.timestamps
    end

    add_index :record_configs, [
      :environment, :scenarios_project_key, :scenarios_scenario_key
    ], unique: true, name: 'index_record_configs_on_env_and_project_key_and_scenario_key'
  end
end
