# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_02_03_073623) do

  create_table "record_configs", force: :cascade do |t|
    t.string "environment", default: "development", null: false
    t.string "scenarios_api_key", null: false
    t.string "scenarios_project_key", null: false
    t.string "record_policy", default: "all", null: false
    t.string "record_match_pattern"
    t.string "scenarios_scenario_key"
    t.string "scenarios_url", null: false
    t.string "service_url", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["environment", "scenarios_project_key", "scenarios_scenario_key"], name: "index_record_configs_on_env_and_project_key_and_scenario_key", unique: true
  end

end
