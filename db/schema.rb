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
    t.string "scenarios_api_key"
    t.integer "scenarios_project_id"
    t.string "scenarios_record_policy", default: "any", null: false
    t.string "scenarios_record_match_pattern"
    t.integer "scenarios_scenario_id"
    t.string "scenarios_url", null: false
    t.string "service_url", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
