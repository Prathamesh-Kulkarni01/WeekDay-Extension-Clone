const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export const fetchPosts = async (offset = 0) => {
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({
      limit: 9,
      offset: offset || 0,
    }),
  };

  try {
    const response = await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const res = await response.json();;
    return res?.jdList || [];
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    return [];
  }
};
