import React from "react";
import { useNavigate } from "react-router-dom";
import { getitinerary } from "../../openAIPrompt";
import {
  Container,
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
  OutlinedInput,
  Chip,
  Checkbox,
  ListItemText,
} from "@mui/material";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const placeTypes = [
  "Must see places",
  "Hiking",
  "Adventure activies",
  "Wildlife",
  "Scenic Drives",
];

const CollectInfo = () => {
  const navigate = useNavigate();
  const [form, setForm] = React.useState({
    placeInput: "",
    tripStartDate: "",
    travelerType: "Single",
    noOfDaysType: "",
    budgetType: "Low",
    placesType: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePlacesTypeChange = (event) => {
    const {
      target: { value },
    } = event;
    setForm((prev) => ({
      ...prev,
      placesType: typeof value === "string" ? value.split(",") : value,
    }));
  };

  async function handleInfo(event) {
    event.preventDefault();

    const {
      placeInput,
      tripStartDate,
      travelerType,
      noOfDaysType,
      budgetType,
      placesType,
    } = form;

    const itineraryData = await getitinerary(
      travelerType,
      placeInput,
      budgetType,
      placesType.join(","),
      months[parseInt(tripStartDate.substr(5, 2), 10) - 1],
      noOfDaysType
    );

    navigate("/itinerary-page", { state: itineraryData });
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Card elevation={6}>
        <CardContent>
          <Typography variant="h4" align="center" color="primary" gutterBottom>
            Answer some questions
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            gutterBottom
          >
            Just answer a few questions so that we can personalize the right
            trip itinerary for you.
          </Typography>
          <Box component="form" onSubmit={handleInfo} sx={{ mt: 3 }}>
            <FormControl fullWidth margin="normal">
              <TextField
                required
                label="Place"
                name="placeInput"
                value={form.placeInput}
                onChange={handleChange}
                placeholder="Enter place name"
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField
                required
                label="Date"
                name="tripStartDate"
                type="date"
                value={form.tripStartDate}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel id="travelerType-label">Traveler Type *</InputLabel>
              <Select
                labelId="travelerType-label"
                name="travelerType"
                value={form.travelerType}
                label="Traveler Type *"
                onChange={handleChange}
              >
                <MenuItem value="Single">Single</MenuItem>
                <MenuItem value="Family">Family</MenuItem>
                <MenuItem value="Friends">Friends</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField
                required
                label="No. of Days"
                name="noOfDaysType"
                type="number"
                value={form.noOfDaysType}
                onChange={handleChange}
                inputProps={{ min: 1 }}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel id="budgetType-label">Budget *</InputLabel>
              <Select
                labelId="budgetType-label"
                name="budgetType"
                value={form.budgetType}
                label="Budget *"
                onChange={handleChange}
              >
                <MenuItem value="Low">Low</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="High">High</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel id="placesType-label">Types of Places *</InputLabel>
              <Select
                labelId="placesType-label"
                multiple
                name="placesType"
                value={form.placesType}
                onChange={handlePlacesTypeChange}
                input={<OutlinedInput label="Types of Places *" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
              >
                {placeTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    <Checkbox checked={form.placesType.indexOf(type) > -1} />
                    <ListItemText primary={type} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Box sx={{ mt: 3, textAlign: "center" }}>
              <Button type="submit" variant="contained" size="large">
                Submit
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default CollectInfo;
