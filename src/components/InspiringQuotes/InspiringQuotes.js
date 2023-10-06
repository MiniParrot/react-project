import { useEffect, useLayoutEffect, useState } from 'react'
import style from './InspiringQuotes.module.css'

const quotes = [
	'„Jedynym sposobem na wykonanie wielkiego dzieła jest pokochanie tego, co robisz." - Steve Jobs',
	'"Jedyną przeszkodą między tobą a twoim celem jest historia, którą ciągle sobie powtarzasz i która opowiada o tym... dlaczego nie możesz go osiągnąć." - Jordan Belfort',
	'"Porażka jest po prostu okazją do tego, by zaczęcia jeszcze raz, tym razem bardziej inteligentnie." - Henry Ford',
	'"Nie bój się porażki. To nie koniec, to tylko początek." - Barack Obama',
	'"Trudne drogi często prowadzą do pięknych destynacji." - Zig Ziglar',
	'"Bądź zmianą, którą chcesz zobaczyć na świecie." - Mahatma Gandhi',
]

const InspiringQuotes = () => {
	const [quote, setQuote] = useState('Wczytywanie...')
	const [loading, setLoading] = useState(true)

	useEffect(() => setLoading(false), [])

	useLayoutEffect(
		() => setQuote(quotes[Math.floor(Math.random() * quotes.length)]),
		[loading]
	)

	return <p className={style.quote}>{quote}</p>
}

export default InspiringQuotes
