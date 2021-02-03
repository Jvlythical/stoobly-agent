class CreateRecordConfigs < ActiveRecord::Migration[6.0]
  def change
    create_table :record_configs do |t|
      t.string :scenarios_api_key
      t.integer :scenarios_project_id
      t.string :scenarios_record_policy, null: false, default: 'any'
      t.string :scenarios_record_match_pattern
      t.integer :scenarios_scenario_id
      t.string :scenarios_url, null: false
      t.string :service_url, null: false

      t.timestamps
    end
  end
end
