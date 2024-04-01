import { ReactElement } from 'react'
import Skeleton from 'react-loading-skeleton'

import styles from './Users.module.scss'
const UsersItemSkeleton = ({ count }: { count: number }): ReactElement => {
	return (
		<>
			{Array(count)
				.fill(null)
				.map((_, i) => (
					<div key={i} className={styles.item}>
						<div className={styles.avatar}>
							<div className={styles.image}>
								<Skeleton width={110} height={110} />
							</div>
							<Skeleton width={100} />
						</div>
						<div className={styles.content}>
							<div className={styles.userinfo}>
								<div className={styles.userinfoItem}>
									<Skeleton width={200} />
								</div>
							</div>
							<div className={styles.statusComment}>
								<Skeleton width={250} />
							</div>
						</div>
					</div>
				))}
		</>
	)
}

export default UsersItemSkeleton
