import AppLayout from "./Components/routes/AppLayout";
import Home from "./Components/routes/Home";
import About from "./Components/routes/About";
import Contact from "./Components/routes/Contact";
import PageNotFound from "./Components/routes/PageNotFound";
import SelectProduct from "./Components/routes/SelectProduct";
import ConfirmOrder from "./Components/routes/ConfirmOrder";
import UserDetails from "./Components/routes/UserDetails";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  const people = [
    {
      id: 1001,
      firstName: "John",
      lastName: "Doe",
      contactNo: "+1-555-0101",
      email: "john.doe@email.com",
      salary: 75000,
      address: "123 Main St, New York, NY 10001",
      dob: "1985-03-15",
      age: 40,
    },
    {
      id: 1002,
      firstName: "Jane",
      lastName: "Smith",
      contactNo: "+1-555-0102",
      email: "jane.smith@email.com",
      salary: 82000,
      address: "456 Oak Ave, Los Angeles, CA 90210",
      dob: "1990-07-22",
      age: 35,
    },
    {
      id: 1003,
      firstName: "Alice",
      lastName: "Johnson",
      contactNo: "+1-555-0103",
      email: "alice.johnson@email.com",
      salary: 68000,
      address: "789 Pine Rd, Chicago, IL 60601",
      dob: "1992-11-08",
      age: 33,
    },
    {
      id: 1004,
      firstName: "Michael",
      lastName: "Brown",
      contactNo: "+1-555-0104",
      email: "michael.brown@email.com",
      salary: 95000,
      address: "321 Elm St, Houston, TX 77001",
      dob: "1982-05-30",
      age: 43,
    },
    {
      id: 1005,
      firstName: "Sarah",
      lastName: "Wilson",
      contactNo: "+1-555-0105",
      email: "sarah.wilson@email.com",
      salary: 71000,
      address: "654 Cedar Blvd, Miami, FL 33101",
      dob: "1988-09-12",
      age: 37,
    },
  ];
  return (
    <Router>
      <div>
        <AppLayout />
        <Routes>
          <Route path="/">
            <Route index element={<Home people={people} />} />
            <Route path="app" element={<Home people={people} />} />
          </Route>
          <Route
            path="/app/:userId"
            element={<UserDetails people={people} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}>
            {/* Nested Routes And Dynamics Routes */}
            <Route index element={<SelectProduct />} />
            <Route path="selectedproduct" element={<SelectProduct />} />
            <Route path="confirmorder" element={<ConfirmOrder />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}
