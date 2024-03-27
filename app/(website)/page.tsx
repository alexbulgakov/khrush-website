import { LAST_THREE_POSTS_QUERY } from '@/sanity/lib/queries'
import { loadQuery } from '@/sanity/lib/store'
import { SanityDocument } from 'next-sanity'

import Landing from './../../components/pages/Landing/Landing'

import styles from './page.module.scss'

export default async function Home() {
  const initial = await loadQuery<SanityDocument[]>(
    LAST_THREE_POSTS_QUERY,
    {},
    {},
  )

  return (
    <main className={styles.main}>
      <Landing posts={initial.data} />
    </main>
  )
}
