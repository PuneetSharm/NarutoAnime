import { axiosClient } from "../utils/axiosClient";

export const getCharacterInfo = async () => {
  const response = await axiosClient.get("/characters");
  const data = response?.data;
  return data;
};

export const getClanInfo = async () => {
  const response = await axiosClient.get("/clans");
  const data = response?.data;
  return data;
};

export const getTeamInfo = async () => {
  const response = await axiosClient.get("/teams");
  const data = response?.data;
  return data;
};

export const getVillageData = async () => {
  const response = await axiosClient.get("/villages");
  const data = response?.data;
  return data;
};

export const getKekkeiGenkaiData = async () => {
  const response = await axiosClient.get("/kekkei-genkai");
  const data = response?.data;
  return data;
};

export const getTailedBeastsData = async () => {
  const response = await axiosClient.get("/tailed-beasts");
  const data = response?.data;
  return data;
};

export const getAkatsukiData = async () => {
  const response = await axiosClient.get("/akatsuki");
  const data = response?.data;
  return data;
};

export const getKaraData = async () => {
  const response = await axiosClient.get("/kara");
  const data = response?.data;
  return data;
};

export const getCharDataById = async (id) => {
  const response = await axiosClient.get(`/characters/${id}`);
  const data = response?.data;
  return data;
};

export const getPaginatedData = async (
  limit = 20,
  currentPage = 1,
  name = ""
) => {
  const response = await axiosClient.get("/characters", {
    params: {
      page: currentPage,
      limit: limit,
      name: name,
    },
  });
  const data = response?.data;
  return data;
};

export const getClansPaginatedData = async (
  limit = 20,
  currentPage = 1,
  name = ""
) => {
  const response = await axiosClient.get("/clans", {
    params: {
      page: currentPage,
      limit: limit,
      name: name,
    },
  });
  const data = response?.data;
  return data;
};
