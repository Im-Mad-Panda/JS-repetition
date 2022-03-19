const user = {
  "favorite color": "green",
  0: "test",
};

user.favoriteColor; // Доступ к свойству

user["favorite color"]; //доступ к свойству с возможностью вычисления

user[0];
user["0"];

const test = "favorite color";

user[test];

const weekPlan = {
  Mon: "Visit to stomatologist",
  Tue: "Got salary",
  Wed: "Meet friends",
  Thu: "Hard working",
  Fri: "Free day",
  Sat: "Go to party",
};

function getPlanning() {
  const dayWeek = prompt(
    "Выберите день недели: \nMon - for monday \nTue - Thuesday \nWed - Wednesday \nThu - Thuesday \nFri - Friday \nSat - Saturday"
  );
  alert(weekPlan[dayWeek] ? weekPlan[dayWeek] : 'Nothing planned for this day' );
}
getPlanning();