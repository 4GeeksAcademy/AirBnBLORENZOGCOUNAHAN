import { Suspense } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import RoomRouteContent from '@/components/RoomRouteContent';

const RoomPage = () => (
  <>
    <Header />
    <main className="mx-auto min-h-screen w-full max-w-7xl px-4 py-6 lg:px-6">
      <Suspense
        fallback={
          <p role="status" className="py-16 text-center text-gray-600">
            Cargando alojamiento…
          </p>
        }
      >
        <RoomRouteContent />
      </Suspense>
    </main>
    <Footer />
  </>
);

export default RoomPage;
