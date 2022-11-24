import { NextSeo } from 'next-seo';
import commonStyles from '../styles/Common.module.css'
import styles from '../styles/Privacy.module.css'

export default function Privacy() {
  return (
    <div className={commonStyles.container}>
      <NextSeo
        title="プライバシーポリシー | 雀トレ - 麻雀の教科書アプリ"
        description="雀トレのプライバシーポリシー"
      />

      <h1 className={commonStyles.pageTitle}>プライバシーポリシー</h1>
      <div className={commonStyles.pageTitleDivider}></div>

      <div className={styles.privacyContainer}>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam neque nisl, eleifend at elit viverra, dictum efficitur justo. Nulla id pretium lacus. Sed ut rutrum sapien. Donec eleifend interdum sem et pulvinar. Praesent pretium, libero nec commodo lacinia, purus nunc posuere dui, in bibendum quam sem non massa. In elementum augue metus, nec varius urna luctus sagittis. Duis id purus consequat, commodo turpis ut, tempor ligula. Curabitur fringilla consectetur nisi. Donec sodales lorem at condimentum faucibus. Fusce tincidunt, leo vel pretium pharetra, risus ipsum suscipit ipsum, quis elementum nisi urna non nibh. Aenean elementum nibh eget arcu laoreet, vel vulputate enim tincidunt.<br/>
            Nulla commodo condimentum fermentum. Nulla viverra molestie turpis, vitae gravida ante mollis ac. In tempus mauris massa, convallis efficitur urna vestibulum ut. Vestibulum id accumsan leo, eget rhoncus odio. Nulla ac varius eros. Cras pretium dui nec bibendum cursus. Nulla facilisi. Nam odio diam, fringilla sed mauris eu, viverra blandit sapien.<br/>
            Vestibulum blandit massa ac ipsum egestas placerat. Quisque porta ipsum elit, sit amet pellentesque nisl pretium ac. Ut erat urna, posuere vel ullamcorper ac, aliquam ut turpis. Aliquam ac dolor sed magna tempus placerat. Vivamus laoreet, tortor ut tincidunt laoreet, ipsum massa consectetur nisl, in facilisis urna arcu eget massa. In fringilla elit mi, vel vestibulum nisl rhoncus non. Nunc fringilla aliquet sollicitudin.<br/>
            Sed odio est, posuere at suscipit vel, fringilla ac odio. Ut nec sagittis lorem. Maecenas vel eleifend nisl, vel egestas eros. Fusce auctor lacus sapien, at maximus tortor ultricies nec. Etiam ullamcorper tortor in malesuada vestibulum. Nam luctus in lacus quis pulvinar. Morbi venenatis suscipit blandit. Vestibulum porttitor malesuada venenatis. Nulla volutpat, nisi sit amet vehicula vehicula, sem est volutpat magna, nec sagittis nisi arcu a tellus. Etiam ultrices gravida tempus. Nullam dapibus quam eu velit aliquam auctor. Vestibulum blandit mi metus, id pharetra sem venenatis vel.<br/>
            Aliquam at bibendum mi. Ut blandit enim quis urna rhoncus, sed blandit est consectetur. Maecenas gravida arcu nulla, sit amet rhoncus tortor gravida at. Sed vel porttitor nunc. Vestibulum consequat dolor consectetur dolor luctus aliquet. Duis auctor vulputate luctus. Donec aliquet convallis posuere.<br/>
        </p>
      </div>

      <div style={{margin: 200}}></div>
    </div>
  )
}
