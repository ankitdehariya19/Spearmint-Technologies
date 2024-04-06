import axios from 'axios';

const ChartAPIService = {
  getYAxisData: async () => {
    try {
      const response = await axios.get('https://retoolapi.dev/o5zMs5/data');
      return response.data.map((item) => ({
        label: item.Label,
        value: parseFloat(item.RandomNumber),
        id: item.id,
      }));
    } catch (error) {
      throw new Error('Error fetching Y-Axis data: ' + error.message);
    }
  },

  getXAxisData: async () => {
    try {
      const response = await axios.get('https://retoolapi.dev/gDa8uC/data');
      return response.data.map((item) => ({
        label: item.Label,
        value: parseFloat(item.RandomNumber),
        id: item.id,
      }));
    } catch (error) {
      throw new Error('Error fetching X-Axis data: ' + error.message);
    }
  },
};

export default ChartAPIService;
