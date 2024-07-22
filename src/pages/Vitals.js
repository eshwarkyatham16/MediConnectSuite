import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import { Chip } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

function Vitals() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        setData(response.data);
        console.log(response);
      })
      .catch((error) => {});
  }, []);

  // Sample data for demonstration
  const basicVital = [
    { id: 1, type: "Temperature", data: "97" },
    { id: 2, type: "Heart Rate", data: "97" },
    { id: 3, type: "Blood Pressure", data: "97" },
    { id: 4, type: "SpO2 (Oxygen Saturation)", data: "97" },
    { id: 5, type: "Breathing Rate", data: "12" },
  ];
  const healthRecords = [
    {
      id: 1,
      type: "Temperature",
      dateUpload: "2022-04-20",
      dateTest: "2022-04-19",
      uploadedBy: "Dr. Smith",
      docType: "PDF",
    },
    {
      id: 2,
      type: "Heart Rate",
      dateUpload: "2022-04-21",
      dateTest: "2022-04-20",
      uploadedBy: "Dr. Johnson",
      docType: "PDF",
    },
    {
      id: 3,
      type: "Blood Pressure",
      dateUpload: "2022-04-22",
      dateTest: "2022-04-21",
      uploadedBy: "Dr. Williams",
      docType: "PDF",
    },
    {
      id: 4,
      type: "SpO2 (Oxygen Saturation)",
      dateUpload: "2022-04-23",
      dateTest: "2022-04-22",
      uploadedBy: "Dr. Brown",
      docType: "PDF",
    },
    {
      id: 5,
      type: "Respiratory/Breathing Rate",
      dateUpload: "2022-04-24",
      dateTest: "2022-04-23",
      uploadedBy: "Dr. Davis",
      docType: "PDF",
    },
  ];

  const columns = [
    { field: "id", headerName: "S.No", width: 90 },
    {
      field: "dateOfUpload",
      headerName: "Date of Upload",
      width: 200,
    },
    { field: "testDate", headerName: "Date of Test", width: 200 },
    {
      field: "uploadedBy",
      headerName: "Uploaded By",
      width: 200,
    },
    {
      field: "hospitalName",
      headerName: "Hospital Name",
      width: 200,
    },
    {
      field: "documentType",
      headerName: "Document Type",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => {
        const status = params.value;
        let chipColor;
        switch (status) {
          case "Completed":
          case "Reviewed":
            chipColor = "primary";
            break;
          case "Pending":
            chipColor = "warning";
            break;
          case "Confirmed":
            chipColor = "success";
            break;
          case "Cancelled":
            chipColor = "error";
            break;
          default:
            chipColor = "default";
            break;
        }

        return <Chip label={status} color={chipColor} />;
      },
    },

    {
      field: "view",
      headerName: "View",
      width: 100,
      sortable: false,
      renderCell: (params) => (
        <IconButton color="primary">
          <a
            href="https://www.med.unc.edu/medclerk/wp-content/uploads/sites/877/2018/10/UMNwriteup.pdf%27"
            target="_blank"
          >
            <VisibilityIcon />
          </a>
        </IconButton>
      ),
    },
  ];
  const rows = [
    {
      id: 1,
      dateOfUpload: "2024-05-08",
      testDate: "2024-05-08",
      uploadedBy: "Alice Johnson",
      hospitalName: "Saint Mary's",
      documentType: "Examination Record",
      status: "Reviewed",
      vital: {
        temperature: "100 °F",
        spO2: "95%",
        heartRate: "70 bpm",
        bloodPressure: "122/76",
        breathingRate: "16",
      },
    },
    {
      id: 2,
      dateOfUpload: "2024-05-17",
      testDate: "2024-05-16",
      uploadedBy: "Jane Smith",
      hospitalName: "General Hospital",
      documentType: "Medical Record",
      status: "Cancelled",
      vital: {
        temperature: "98 °F",
        spO2: "96%",
        heartRate: "72 bpm",
        bloodPressure: "120/72",
        breathingRate: "12",
      },
    },
    {
      id: 3,
      dateOfUpload: "2024-05-11",
      testDate: "2024-05-10",
      uploadedBy: "Bob White",
      hospitalName: "Mediclinic",
      documentType: "Test Report",
      status: "Cancelled",
      vital: {
        temperature: "97 °F",
        spO2: "97%",
        heartRate: "76 bpm",
        bloodPressure: "115/75",
        breathingRate: "20",
      },
    },
    {
      id: 4,
      dateOfUpload: "2024-04-20",
      testDate: "2024-04-17",
      uploadedBy: "Alice Johnson",
      hospitalName: "City Hospital",
      documentType: "Test Report",
      status: "Confirmed",
      vital: {
        temperature: "99 °F",
        spO2: "98%",
        heartRate: "74 bpm",
        bloodPressure: "118/74",
        breathingRate: "14",
      },
    },
    {
      id: 5,
      dateOfUpload: "2024-05-05",
      testDate: "2024-05-05",
      uploadedBy: "Alice Johnson",
      hospitalName: "Mediclinic",
      documentType: "Lab Results",
      status: "Confirmed",
      vital: {
        temperature: "97 °F",
        spO2: "97%",
        heartRate: "76 bpm",
        bloodPressure: "115/75",
        breathingRate: "20",
      },
    },
    {
      id: 6,
      dateOfUpload: "2024-05-03",
      testDate: "2024-05-01",
      uploadedBy: "John Doe",
      hospitalName: "City Hospital",
      documentType: "Patient Summary",
      status: "Pending",
      vital: {
        temperature: "100 °F",
        spO2: "95%",
        heartRate: "70 bpm",
        bloodPressure: "122/76",
        breathingRate: "16",
      },
    },
    {
      id: 7,
      dateOfUpload: "2024-04-27",
      testDate: "2024-04-26",
      uploadedBy: "Jane Smith",
      hospitalName: "Mediclinic",
      documentType: "Medical Record",
      status: "Completed",
      vital: {
        temperature: "98 °F",
        spO2: "96%",
        heartRate: "72 bpm",
        bloodPressure: "120/72",
        breathingRate: "12",
      },
    },
    {
      id: 8,
      dateOfUpload: "2024-05-16",
      testDate: "2024-05-15",
      uploadedBy: "Emma Brown",
      hospitalName: "Health Center",
      documentType: "Lab Results",
      status: "Reviewed",
      vital: {
        temperature: "101 °F",
        spO2: "99%",
        heartRate: "68 bpm",
        bloodPressure: "110/70",
        breathingRate: "18",
      },
    },
    {
      id: 9,
      dateOfUpload: "2024-05-18",
      testDate: "2024-05-16",
      uploadedBy: "Bob White",
      hospitalName: "Saint Mary's",
      documentType: "Examination Record",
      status: "Pending",
      vital: {
        temperature: "97 °F",
        spO2: "97%",
        heartRate: "76 bpm",
        bloodPressure: "115/75",
        breathingRate: "20",
      },
    },
    {
      id: 10,
      dateOfUpload: "2024-05-09",
      testDate: "2024-05-07",
      uploadedBy: "Alice Johnson",
      hospitalName: "Health Center",
      documentType: "Patient Summary",
      status: "Completed",
      vital: {
        temperature: "99 °F",
        spO2: "98%",
        heartRate: "74 bpm",
        bloodPressure: "118/74",
        breathingRate: "14",
      },
    },
    {
      id: 11,
      dateOfUpload: "2024-05-14",
      testDate: "2024-05-11",
      uploadedBy: "Jane Smith",
      hospitalName: "General Hospital",
      documentType: "Test Report",
      status: "Confirmed",
      vital: {
        temperature: "98 °F",
        spO2: "96%",
        heartRate: "72 bpm",
        bloodPressure: "120/72",
        breathingRate: "12",
      },
    },
    {
      id: 12,
      dateOfUpload: "2024-05-19",
      testDate: "2024-05-19",
      uploadedBy: "Bob White",
      hospitalName: "City Hospital",
      documentType: "Medical Record",
      status: "Reviewed",
      vital: {
        temperature: "100 °F",
        spO2: "95%",
        heartRate: "70 bpm",
        bloodPressure: "122/76",
        breathingRate: "16",
      },
    },
    {
      id: 13,
      dateOfUpload: "2024-04-22",
      testDate: "2024-04-20",
      uploadedBy: "Emma Brown",
      hospitalName: "Mediclinic",
      documentType: "Examination Record",
      status: "Cancelled",
      vital: {
        temperature: "97 °F",
        spO2: "97%",
        heartRate: "76 bpm",
        bloodPressure: "115/75",
        breathingRate: "20",
      },
    },
    {
      id: 14,
      dateOfUpload: "2024-04-25",
      testDate: "2024-04-23",
      uploadedBy: "John Doe",
      hospitalName: "Saint Mary's",
      documentType: "Lab Results",
      status: "Confirmed",
      vital: {
        temperature: "98 °F",
        spO2: "96%",
        heartRate: "72 bpm",
        bloodPressure: "120/72",
        breathingRate: "12",
      },
    },
    {
      id: 15,
      dateOfUpload: "2024-05-10",
      testDate: "2024-05-07",
      uploadedBy: "Alice Johnson",
      hospitalName: "Health Center",
      documentType: "Test Report",
      status: "Pending",
      vital: {
        temperature: "101 °F",
        spO2: "99%",
        heartRate: "68 bpm",
        bloodPressure: "110/70",
        breathingRate: "18",
      },
    },
    {
      id: 16,
      dateOfUpload: "2024-05-07",
      testDate: "2024-05-04",
      uploadedBy: "Bob White",
      hospitalName: "City Hospital",
      documentType: "Medical Record",
      status: "Completed",
      vital: {
        temperature: "99 °F",
        spO2: "98%",
        heartRate: "74 bpm",
        bloodPressure: "118/74",
        breathingRate: "14",
      },
    },
    {
      id: 17,
      dateOfUpload: "2024-05-12",
      testDate: "2024-05-12",
      uploadedBy: "Jane Smith",
      hospitalName: "Mediclinic",
      documentType: "Examination Record",
      status: "Reviewed",
      vital: {
        temperature: "97 °F",
        spO2: "97%",
        heartRate: "76 bpm",
        bloodPressure: "115/75",
        breathingRate: "20",
      },
    },
    {
      id: 18,
      dateOfUpload: "2024-05-02",
      testDate: "2024-05-02",
      uploadedBy: "Emma Brown",
      hospitalName: "General Hospital",
      documentType: "Patient Summary",
      status: "Pending",
      vital: {
        temperature: "98 °F",
        spO2: "96%",
        heartRate: "72 bpm",
        bloodPressure: "120/72",
        breathingRate: "12",
      },
    },
    {
      id: 19,
      dateOfUpload: "2024-05-15",
      testDate: "2024-05-12",
      uploadedBy: "John Doe",
      hospitalName: "Saint Mary's",
      documentType: "Lab Results",
      status: "Completed",
      vital: {
        temperature: "100 °F",
        spO2: "95%",
        heartRate: "70 bpm",
        bloodPressure: "122/76",
        breathingRate: "16",
      },
    },
    {
      id: 20,
      dateOfUpload: "2024-04-29",
      testDate: "2024-04-27",
      uploadedBy: "Alice Johnson",
      hospitalName: "Health Center",
      documentType: "Medical Record",
      status: "Reviewed",
      vital: {
        temperature: "101 °F",
        spO2: "99%",
        heartRate: "68 bpm",
        bloodPressure: "110/70",
        breathingRate: "18",
      },
    },
    {
      id: 21,
      dateOfUpload: "2024-04-30",
      testDate: "2024-04-30",
      uploadedBy: "Bob White",
      hospitalName: "City Hospital",
      documentType: "Examination Record",
      status: "Cancelled",
      vital: {
        temperature: "97 °F",
        spO2: "97%",
        heartRate: "76 bpm",
        bloodPressure: "115/75",
        breathingRate: "20",
      },
    },
    {
      id: 22,
      dateOfUpload: "2024-05-06",
      testDate: "2024-05-04",
      uploadedBy: "Jane Smith",
      hospitalName: "Mediclinic",
      documentType: "Test Report",
      status: "Confirmed",
      vital: {
        temperature: "98 °F",
        spO2: "96%",
        heartRate: "72 bpm",
        bloodPressure: "120/72",
        breathingRate: "12",
      },
    },
    {
      id: 23,
      dateOfUpload: "2024-05-04",
      testDate: "2024-05-03",
      uploadedBy: "Emma Brown",
      hospitalName: "Saint Mary's",
      documentType: "Lab Results",
      status: "Reviewed",
      vital: {
        temperature: "99 °F",
        spO2: "98%",
        heartRate: "74 bpm",
        bloodPressure: "118/74",
        breathingRate: "14",
      },
    },
    {
      id: 24,
      dateOfUpload: "2024-04-24",
      testDate: "2024-04-22",
      uploadedBy: "John Doe",
      hospitalName: "General Hospital",
      documentType: "Patient Summary",
      status: "Pending",
      vital: {
        temperature: "100 °F",
        spO2: "95%",
        heartRate: "70 bpm",
        bloodPressure: "122/76",
        breathingRate: "16",
      },
    },
    {
      id: 25,
      dateOfUpload: "2024-04-21",
      testDate: "2024-04-18",
      uploadedBy: "Alice Johnson",
      hospitalName: "Health Center",
      documentType: "Medical Record",
      status: "Cancelled",
      vital: {
        temperature: "101 °F",
        spO2: "99%",
        heartRate: "68 bpm",
        bloodPressure: "110/70",
        breathingRate: "18",
      },
    },
    {
      id: 26,
      dateOfUpload: "2024-04-26",
      testDate: "2024-04-25",
      uploadedBy: "Bob White",
      hospitalName: "City Hospital",
      documentType: "Examination Record",
      status: "Reviewed",
      vital: {
        temperature: "97 °F",
        spO2: "97%",
        heartRate: "76 bpm",
        bloodPressure: "115/75",
        breathingRate: "20",
      },
    },
    {
      id: 27,
      dateOfUpload: "2024-04-28",
      testDate: "2024-04-26",
      uploadedBy: "Jane Smith",
      hospitalName: "Mediclinic",
      documentType: "Lab Results",
      status: "Completed",
      vital: {
        temperature: "98 °F",
        spO2: "96%",
        heartRate: "72 bpm",
        bloodPressure: "120/72",
        breathingRate: "12",
      },
    },
    {
      id: 28,
      dateOfUpload: "2024-05-01",
      testDate: "2024-04-28",
      uploadedBy: "Emma Brown",
      hospitalName: "General Hospital",
      documentType: "Test Report",
      status: "Confirmed",
      vital: {
        temperature: "99 °F",
        spO2: "98%",
        heartRate: "74 bpm",
        bloodPressure: "118/74",
        breathingRate: "14",
      },
    },
    {
      id: 29,
      dateOfUpload: "2024-05-13",
      testDate: "2024-05-10",
      uploadedBy: "John Doe",
      hospitalName: "Saint Mary's",
      documentType: "Patient Summary",
      status: "Reviewed",
      vital: {
        temperature: "100 °F",
        spO2: "95%",
        heartRate: "70 bpm",
        bloodPressure: "122/76",
        breathingRate: "16",
      },
    },
    {
      id: 30,
      dateOfUpload: "2024-04-23",
      testDate: "2024-04-21",
      uploadedBy: "Alice Johnson",
      hospitalName: "Health Center",
      documentType: "Medical Record",
      status: "Cancelled",
      vital: {
        temperature: "101 °F",
        spO2: "99%",
        heartRate: "68 bpm",
        bloodPressure: "110/70",
        breathingRate: "18",
      },
    },
  ];

  return (
    <div>
      <h3>Vitals & Reports</h3>
      <div class="vitalcard-container">
        <div class="vitalcard vitalcard-temperature">
          <img
            src={`${process.env.PUBLIC_URL}/assets/imgs/tempremov.png`}
            width={50}
            height={50}
          />
          <div class="vitalcard-header">Temperature</div>
          <div class="vitalcard-main">98 ° F</div>
          <div class="vitalcard-graph"></div>
          <div class="vitalcard-footer">Normal</div>
        </div>
        <div class="vitalcard vitalcard-spo2">
          <img
            src={`${process.env.PUBLIC_URL}/assets/imgs/ssssss.png`}
            width={50}
            height={50}
          />
          <div class="vitalcard-header">SpO2</div>
          <div class="vitalcard-main">96%</div>
          <div class="vitalcard-graph"></div>
          <div class="vitalcard-footer">Normal</div>
        </div>
        <div class="vitalcard vitalcard-heart-rate">
          <img
            src={`${process.env.PUBLIC_URL}/assets/imgs/haertbeatremoved.png`}
            width={50}
            height={50}
          />
          <div class="vitalcard-header">Heart Rate</div>
          <div class="vitalcard-main">72 bpm</div>
          <div class="vitalcard-graph"></div>
          <div class="vitalcard-footer">Normal</div>
        </div>
        <div class="vitalcard vitalcard-blood-pressure">
          <img
            src={`${process.env.PUBLIC_URL}/assets/imgs/spotremov.png`}
            width={50}
            height={50}
          />
          <div class="vitalcard-header">Blood Pressure</div>
          <div class="vitalcard-main">120/72</div>
          <div class="vitalcard-graph"></div>
          <div class="vitalcard-footer">Good</div>
        </div>
        <div class="vitalcard vitalcard-breathing-rate">
          <img
            src={`${process.env.PUBLIC_URL}/assets/imgs/lungsremov.png`}
            width={50}
            height={50}
          />
          <div class="vitalcard-header">Breathing Rate</div>
          <div class="vitalcard-main">12</div>
          <div class="vitalcard-graph"></div>
          <div class="vitalcard-footer">Good</div>
        </div>
      </div>

      <div className="col-12">
        <div className="card p-3">
          <h3 className="header mb-3">My Test Records</h3>
          <div>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 10,
                  },
                },
              }}
              pageSizeOptions={[10, 20, 30]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vitals;
