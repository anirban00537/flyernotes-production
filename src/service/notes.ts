import request from "@/utils/request";

export const GetUserNotesAndLabels = async () => {
  const { data } = await request.get("/note/get-user-all-labels-notes");
  return data;
};
