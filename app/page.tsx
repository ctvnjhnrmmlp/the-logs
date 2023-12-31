import HomeSection from '@/layouts/Section/HomeSection/HomeSection';
import WeblogSection from '@/layouts/Section/WeblogSection/WeblogSection';

export default function Home() {
	return (
		<main className='flex gap-40 min-h-screen flex-col items-center justify-between p-32'>
			<HomeSection />
			<WeblogSection />
		</main>
	);
}
