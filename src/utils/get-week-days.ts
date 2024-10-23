export function getWeekDays() {
  const formatter = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
  });

  return Array.from({ length: 7 })
    .map((_, index) => {
      return formatter.format(new Date(Date.UTC(2021, 5, index)));
    })
    .map((weekDay) => {
      return weekDay.substring(0, 1).toUpperCase() + weekDay.substring(1);
    });
}
