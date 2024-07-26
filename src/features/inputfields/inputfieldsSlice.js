import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  DISCOVER,
  DEVELOP,
  DISSECT,
  DESIGN,
  DELIVER,
} from "../../staticData/labels";

const apiEndpoints = {
  discover: {
    "Company Info": "http://127.0.0.1:8000/api/companies/",
    Perception: "http://127.0.0.1:8000/api/perception/",
    Loyalty: "http://127.0.0.1:8000/api/loyalty/",
    Advocacy: "http://127.0.0.1:8000/api/advocacy/",
    Attraction: "http://127.0.0.1:8000/api/attraction/",
    Influence: "http://127.0.0.1:8000/api/influence/",
    Brand: "http://127.0.0.1:8000/api/brand/",
  },
  develop: {
    "Attributes of Great Place":
      "http://127.0.0.1:8000/api/attributes-of-great-workplace/",
    "Key Themes": "http://127.0.0.1:8000/api/key-themes/",
    "Audience-Wise Messaging":
      "http://127.0.0.1:8000/api/audience-wise-messaging/",
  },
  dissect: {
    Analysis: "http://127.0.0.1:8000/api/swot-analysis/",
    Alignment: "http://127.0.0.1:8000/api/alignment/",
  },
  design: {
    "Creative Direction": "http://127.0.0.1:8000/api/creative-direction/",
    "EVP Promise": "http://127.0.0.1:8000/api/evp-promise/",
    "EVP Audit": "http://127.0.0.1:8000/api/evp-audit/",
  },
  deliver: {
    "EVP Execution Plan": "http://127.0.0.1:8000/api/evp-execution-plan/",
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
      selectedItem === "EVP Audit"
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
