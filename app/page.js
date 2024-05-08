import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Privacy Policy</h1>
        <section>
          <h4>Information We Collect:</h4>
          <p>
            - Our application, السيرة النبوية كاملة (com.seira.seiranabawayaa),
            does not collect any personal information or require any permissions
            from the user.
          </p>
          <p>
            - We do not gather any data related to your usage of the application
            or any other personal information about you.
          </p>
        </section>
        <section>
          <h4>Use of Information:</h4>
          <p>
            - Since our application only opens a website, it does not utilize
            any information collected from users.
          </p>
          <p>
            - We do not track user activities or collect data for analytics
            purposes.
          </p>
        </section>
        <section>
          <h4>Third-Party Links:</h4>
          <p>
            - Our application may contain links to third-party websites or
            services. However, we are not responsible for the privacy practices
            or the content of such third-party websites or services. We
            encourage users to review the privacy policies of those third
            parties.
          </p>
        </section>
        <section>
          <h4>Changes to This Privacy Policy:</h4>
          <p>
            - We may update our Privacy Policy periodically. Any changes to this
            Privacy Policy will be effective upon posting, and your continued
            use of the application after the posting will constitute acceptance
            of, and agreement to be bound by, those changes.
          </p>
        </section>
        <section>
          <h4>Data Security:</h4>
          <p>
            - We implement reasonable measures to protect the information
            collected through the application from unauthorized access, use, or
            disclosure. However, it's important to note that no method of
            transmission over the internet or electronic storage is 100% secure,
            and therefore, we cannot guarantee absolute security.
          </p>
        </section>
        <section>
          <h4>Contact Us:</h4>
          <p>
            - If you have any questions or concerns about this Privacy Policy,
            please contact us at<span> </span>
            <a href='mailto:crevedweb@gmail.com'>crevedweb@gmail.com</a>.
          </p>
        </section>
        <section>
          <h4>Your Rights:</h4>
          <p>
            - You have the right to access, update, or delete any personal
            information we may hold about you. If you would like to exercise any
            of these rights, please contact us using the details provided in
            this Privacy Policy.
          </p>
        </section>
        <section>
          <h4>Retention of Information:</h4>
          <p>
            - We will retain any information collected through the application
            only for as long as necessary to fulfill the purposes outlined in
            this Privacy Policy or as required by law.
          </p>
        </section>
      </div>
    </main>
  )
}
