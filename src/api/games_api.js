//Base URL
const base_url = "https://api.rawg.io/api/";

//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
//Getting the date
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `games?key=a2dc74fd7762490499ec2196df8d888e&dates=${lastYear},${currentDate}&ordering=-rating&page_size=20`;
const upcoming_games = `games?key=a2dc74fd7762490499ec2196df8d888e&dates=${currentDate},${nextYear}&ordering=-added&page_size=20`;
const newGames = `games?key=a2dc74fd7762490499ec2196df8d888e&dates=${lastYear},${currentDate}&ordering=-released&page_size=20`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
// const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcommingGamesURL = () => `${base_url}${upcoming_games}`;
// const upcommingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;
// const newGamesURL = () => `${base_url}${newGames}`;
// // //GAME DETAILS
// export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}`;
// //Game ScreenShots
// export const gameScreenshotURL = (game_id) =>
//   `${base_url}games/${game_id}/screenshots`;
// //Searched game
// export const searchGameURL = (game_name) =>
//   `${base_url}games?key=a2dc74fd7762490499ec2196df8d888e&search=${game_name}&page_size=9`;

// console.log(upcommingGamesURL());
