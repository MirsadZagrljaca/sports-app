import cache from "../../../cache/cache";

const getCache = (req, res) => {
  res.json(cache);
};

export default { getCache };
