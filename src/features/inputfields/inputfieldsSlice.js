import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

const apiEndpoints = {
  discover: {
    "Company Info": `${REACT_APP_BASE_URL}/companies/`,
  },
  develop: {
    "Attributes of Great Place": `${REACT_APP_BASE_URL}/attributes-of-great-workplace/`,
    "Key Themes": `${REACT_APP_BASE_URL}/key-themes/`,
    "Audience-Wise Messaging": `${REACT_APP_BASE_URL}/audience-wise-messaging/`,
  },
  dissect: {
    Analysis: `${REACT_APP_BASE_URL}/swot-analysis/`,
    Alignment: `${REACT_APP_BASE_URL}/alignment/`,
  },
  design: {
    "Creative Direction": `${REACT_APP_BASE_URL}/creative-direction/`,
    "EVP Promise": `${REACT_APP_BASE_URL}/evp-promise/`,
    "EVP Audit": `${REACT_APP_BASE_URL}/evp-audit/`,
    "EVP Handbook": `${REACT_APP_BASE_URL}/evp-handbook/`,
  },
  deliver: {
    "EVP Execution Plan": `${REACT_APP_BASE_URL}/evp-execution-plan/`,
    "EVP Statement & Pillars": `${REACT_APP_BASE_URL}/evp-statement-and-pillars/`,
  },
};

export const fetchDataForSelectedItem = createAsyncThunk(
  "inputFields/fetchDataForSelectedItem",
  async (selectedItem, { rejectWithValue }) => {
    const companyName = localStorage.getItem("companyName");
    if (!companyName) {
      return rejectWithValue("Company name not found in local storage");
    }
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      return rejectWithValue("Access Token not found in local storage");
    }

    const apiUrl =
      apiEndpoints.discover[selectedItem] ||
      apiEndpoints.develop[selectedItem] ||
      apiEndpoints.dissect[selectedItem] ||
      apiEndpoints.design[selectedItem] ||
      apiEndpoints.deliver[selectedItem];

    if (!apiUrl) {
      return rejectWithValue("Invalid selected item");
    }

    if (
      selectedItem === "Creative Direction" ||
      selectedItem === "EVP Promise" ||
      selectedItem === "EVP Audit" ||
      selectedItem === "EVP Handbook"
    ) {
      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            company_name: companyName,
          }),
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    } else if (selectedItem === "EVP Statement & Pillars") {
      try {
        const response = await fetch(`${apiUrl}${companyName}/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        return Array.isArray(data) ? data : [data];
      } catch (error) {
        return rejectWithValue(error.message);
      }
    } else {
      try {
        const response = await fetch(`${apiUrl}${companyName}/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        return Array.isArray(data) ? data : [data];
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

const inputFieldsSlice = createSlice({
  name: "inputFields",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataForSelectedItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDataForSelectedItem.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDataForSelectedItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default inputFieldsSlice.reducer;
