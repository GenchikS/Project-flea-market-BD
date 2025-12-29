
export const calculatePagonationData = (announcementsCount, perPage, page) => {
    // console.log(`announcementsCount`, announcementsCount._conditions);
    const totalPages = Math.ceil(announcementsCount/ perPage);
    // console.log(`totalPages`, totalPages);
  const nextPage = totalPages === 0 ? false : Boolean(totalPages - page);

  const previousPage = page > 1 ? true : false;

  return {
    page,
    perPage,
    totalAnnouncement: announcementsCount,
    totalPages,
    nextPage,
    previousPage,
  };
};
