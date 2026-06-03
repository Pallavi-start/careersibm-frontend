export default function DashboardCards({
  applications,
  profiles,
  jobs,
}) {
  const cards = [
    {
      title: "Applications",
      value: applications,
    },
    {
      title: "Profiles",
      value: profiles,
    },
    {
      title: "Jobs",
      value: jobs,
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-xl shadow p-6"
        >
          <h3 className="text-gray-500">
            {card.title}
          </h3>

          <p className="text-4xl font-bold mt-2">
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
}