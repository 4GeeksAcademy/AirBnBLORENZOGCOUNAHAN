interface HostInfoProps {
  name: string;
  avatar: string;
  yearsAsHost: number;
}

const HostInfo = ({ name, avatar, yearsAsHost }: HostInfoProps) => (
  <section className="mb-6 flex items-center gap-4 border-b border-gray-200 pb-6">
    <div
      role="img"
      aria-label={`Avatar de ${name}`}
      className="flex h-14 w-14 items-center justify-center rounded-full bg-rose-100 text-lg font-semibold text-rose-700"
    >
      {avatar}
    </div>
    <div>
      <h2 className="font-semibold text-gray-900">Anfitrión: {name}</h2>
      <p className="mt-1 text-sm text-gray-500">
        {yearsAsHost} {yearsAsHost === 1 ? 'año' : 'años'} como anfitrión
      </p>
    </div>
  </section>
);

export default HostInfo;
