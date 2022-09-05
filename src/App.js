import React from "react";
import {DatePicker, TimePicker } from 'antd'
import ProdCards from "./components/ProdCards";
import UserTable from "./components/UserTable";


function App() {
  return (
  <>
  <DatePicker />
  <TimePicker />
  <ProdCards />
  <UserTable />
  </>
  )
}

export default App;
