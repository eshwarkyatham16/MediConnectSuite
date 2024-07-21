import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Paper } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import { Chip } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useState, useEffect } from "react";
import axios from "axios";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "doctorName", headerName: "Doctor Name", width: 200 },
  {
    field: "appointmentDate",
    headerName: "Appointment Date",
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
        case "Confirmed":
          chipColor = "primary";
          break;
        case "Pending":
          chipColor = "warning";
          break;
        case "Canceled":
          chipColor = "error";
          break;
        default:
          chipColor = "default";
          break;
      }

      return <Chip label={status} color={chipColor} />;
    },
  },
];

export default function Appointments() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://669d8e7615704bb0e3064c25.mockapi.io/api/appointments")
      .then((response) => {
        setData(response.data);
        console.log(response);
      })
      .catch((error) => {});
  }, []);

  return (
    <div>
      <h3>Appointments</h3>
      <div className="row">
        <div className="col-8">
          <Paper>
            <div className="px-5 pt-3">
              <div className="row">
                <div className="col-8 d-flex flex-column justify-content-center">
                  <h3>
                    Welcome{" "}
                    {
                      ["Eshwar", "Kalyan", "Manasa", "Praveen"][
                        Math.floor(Math.random() * 4)
                      ]
                    }
                    !
                  </h3>
                  <span className="mb-4">
                    Get your latest update for the last 7 days
                  </span>
                  <Button className="border w-50">Connect to Doctor!</Button>
                </div>
                <div className="col-4 d-flex  justify-content-end">
                  <img
                    src="/assets/imgs/docback.png"
                    width="200"
                    height="200"
                  />
                </div>
              </div>
            </div>
          </Paper>
          <div className="my-3"></div>
          <div class="vitalcard-container" style={{ padding: 0 }}>
            <div class="vitalcard-app vitalcard-temperature">
              <img src="/assets/imgs/tempremov.png" width={50} height={50} />
              <div class="vitalcard-header">Temperature</div>
              <div class="vitalcard-main">98 ° F</div>
              <div class="vitalcard-graph"></div>
              <div class="vitalcard-footer">Normal</div>
            </div>
            <div class="vitalcard-app vitalcard-spo2">
              <img src="/assets/imgs/ssssss.png" width={50} height={50} />
              <div class="vitalcard-header">SpO2</div>
              <div class="vitalcard-main">96%</div>
              <div class="vitalcard-graph"></div>
              <div class="vitalcard-footer">Normal</div>
            </div>
            <div class="vitalcard-app vitalcard-heart-rate">
              <img
                src="/assets/imgs/haertbeatremoved.png"
                width={50}
                height={50}
              />
              <div class="vitalcard-header">Heart Rate</div>
              <div class="vitalcard-main">72 bpm</div>
              <div class="vitalcard-graph"></div>
              <div class="vitalcard-footer">Normal</div>
            </div>
          </div>
        </div>
        <div className="col-4 border card">
          <div className="p-3">
            <h3 className="header">Scheduled Appointments</h3>

            <div
              className="border d-flex flex-column p-3 card"
              style={{ height: "280px" }}
            >
              <span className="border p-1 rounded">Routine Checkup</span>
              <div>Domain Lewis - Standard Consult</div>
              <div>
                <span>10:30am - 11:00am</span>
                <span>Starts in 25min</span>
              </div>
              <Divider variant="middle" />
              <div>
                <div>
                  <img src="" />
                </div>
                <div>
                  <strong>Eshwar Kyatham</strong>
                  <small>928-225-1141</small>
                </div>
              </div>
              <Divider variant="middle" />
              <div>
                <Button className="border">Edit Consult</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-3"></div>
      <div className="row">
        <div className="col-6">
          <div className="card p-3 ">
            <h3 className="header">Heart rate over the week</h3>
            <div style={{ height: "630px" }}>
              <LineChart
                xAxis={[{ data: [70, 80, 90, 100, 110, 120] }]}
                series={[
                  {
                    data: [70, 73, 76, 68, 63, 69],
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="p-3 card">
            <h3 className="header">My Appointments</h3>
            <div>
              <DataGrid
                rows={data}
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
    </div>
  );
}
