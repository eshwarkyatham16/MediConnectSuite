import { Button, Chip } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState, useEffect } from "react";
import axios from "axios";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "doctorName", headerName: "Doctor Name", width: 200 },
  {
    field: "appointmentDate",
    headerName: "Appointment Date",
    width: 150,
  },
  {
    field: "treatment",
    headerName: "Treatment",
    width: 200,
  },
  {
    field: "diagnosis",
    headerName: "Diagnosis",
    width: 200,
  },
  {
    field: "nextAppointment",
    headerName: "Next Appointment",
    width: 150,
  },
  {
    field: "notes",
    headerName: "Notes",
    width: 300,
  },
  {
    field: "status",
    headerName: "Status",
    width: 120,
    renderCell: (params) => {
      const status = params.value;
      let chipColor;
      switch (status) {
        case "Completed":
          chipColor = "success";
          break;
        case "Ongoing":
          chipColor = "primary";
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

export default function History() {
  const [data, setData] = useState([]);
  const [rowSelectionModel, setRowSelectionModel] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState();

  useEffect(() => {
    localStorage.removeItem("expiryDate");
  }, []);

  const doctors = [
    { id: 1, name: "Dr. Smith" },
    { id: 2, name: "Dr. Johnson" },
    { id: 3, name: "Dr. Williams" },
  ];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    alert("Invite Sent Successfully!");
  };

  useEffect(() => {
    axios
      .get("https://669d8e7615704bb0e3064c25.mockapi.io/api/history")
      .then((response) => {
        setData(response.data);
        console.log(response);
      })
      .catch((error) => {});
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      doctorId: doctor,
      expiryDate: date.$d,
      historyIds: [...rowSelectionModel],
    };

    localStorage.setItem("expiryDate", JSON.stringify(date.$d));
    handleClose();
  };

  return (
    <div>
      <div className="d-flex justify-content-between mb-3">
        <h3>History</h3>
        <Button
          endIcon={<SendIcon />}
          variant="outlined"
          disabled={!rowSelectionModel?.length}
          onClick={handleClickOpen}
        >
          Send Invite
        </Button>
      </div>
      <DataGrid
        checkboxSelection
        rows={data}
        columns={columns}
        onRowSelectionModelChange={(newRowSelectionModel) => {
          console.log(newRowSelectionModel);
          setRowSelectionModel(newRowSelectionModel);
        }}
        rowSelectionModel={rowSelectionModel}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10, 20, 30]}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Send Invite</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Select the doctor and expiry date and time to send the invite to the
            doctor
          </DialogContentText>
          <div className="mb-3">
            <FormControl fullWidth margin="dense">
              <InputLabel id="doctor-select-label">Doctor</InputLabel>
              <Select
                labelId="doctor-select-label"
                id="doctor-select"
                value={doctor}
                label="Doctor"
                onChange={(e) => setDoctor(e.target.value)}
                required
              >
                {doctors.map((doc) => (
                  <MenuItem key={doc.id} value={doc.id}>
                    {doc.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="w-100">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                renderInput={(props) => (
                  <TextField {...props} fullWidth margin="dense" />
                )}
                label="Expiry Date and Time"
                value={date}
                onChange={setDate}
                required
                minutesStep={1}
              />
            </LocalizationProvider>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Send Invite</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
