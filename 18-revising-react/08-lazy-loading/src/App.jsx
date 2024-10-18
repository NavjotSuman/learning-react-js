import react,{ lazy, Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const MyComponent = lazy(()=>import("./components/MyComponent"))

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
        deleniti consectetur labore nobis libero? Voluptatum odio est enim
        doloremque laudantium id nisi, asperiores excepturi natus debitis
        inventore assumenda consequatur, magnam magni soluta voluptas expedita
        quibusdam iste veniam illum voluptatem? Quod fuga, magnam quisquam
        ratione laudantium velit neque voluptates totam suscipit impedit, est
        delectus iure tenetur facere cum! Soluta nobis qui repellat voluptatibus
        illum cum? Maxime error rem aliquam obcaecati vitae magni repellendus id
        fugit doloremque deserunt. Itaque consequatur quod debitis ducimus
        asperiores, quia explicabo ad? Hic quas in labore alias, quam, aperiam
        dolor soluta provident quasi dolores quidem vitae accusamus? Tempore
        facilis odit porro veniam sunt aspernatur, earum fugiat cumque officia
        neque eum voluptatem ex fugit ut. Veritatis at eligendi eaque ipsum esse
        saepe molestias perspiciatis beatae impedit eius exercitationem est
        totam quis consequuntur cumque accusamus architecto fugiat, rerum
        voluptate earum! Quia laudantium similique beatae, magnam delectus
        voluptatum voluptas sapiente recusandae culpa dicta cumque, nisi
        distinctio odit rem blanditiis, corporis doloremque! Odit, aliquid!
        Distinctio fuga ducimus, sunt laudantium fugiat nulla optio doloremque
        velit. Adipisci tenetur, hic fugit odit ipsa voluptates recusandae
        temporibus autem tempora ea! Quas perspiciatis molestiae eaque
        consectetur! Quia ea voluptates enim ut officia? Molestiae voluptatum
        nulla nostrum ullam natus eum? Amet vitae eos corporis repudiandae.
        Voluptates, voluptatum expedita? Ipsam delectus animi reprehenderit sint
        vel sed porro ipsa cupiditate. Itaque fugit corrupti voluptates, quis
        ipsum incidunt aliquam nesciunt dolorem odit nemo quia debitis
        consectetur eos ab similique aut ducimus, recusandae possimus. Vel
        deserunt porro aliquid sequi delectus eaque molestiae eum vero. Ipsum,
        similique autem! Nisi dignissimos ut harum, vitae voluptates, corporis
        dolore atque amet earum tenetur aliquam obcaecati voluptas! Accusantium
        accusamus officia sit earum minus alias neque velit. Culpa fugiat
        distinctio, quam magnam nesciunt nostrum quidem officiis! Dolore
        voluptas, ipsam cupiditate ab delectus odit, ipsum expedita nesciunt
        sequi quos excepturi sint iure optio vel. Illum molestias maxime, cum
        exercitationem laboriosam quibusdam sed fugit, tempore dicta incidunt
        et? Fugit temporibus est iste laborum dolorum. Dolore culpa deleniti cum
        possimus incidunt ipsa quis fugiat dolorem consectetur eum. Autem
        temporibus optio eius quis quaerat impedit amet sint error minus,
        voluptatem ipsa corrupti, recusandae commodi ratione odio, dolorem odit
        dicta labore porro corporis veniam harum! Distinctio consectetur aut
        molestias modi non. Sint, necessitatibus reprehenderit voluptatem, ipsa
        consectetur iusto facilis error odit eum deleniti earum! Vitae quod,
        commodi, omnis voluptatem in nesciunt voluptates cum ipsum incidunt
        esse, quidem molestias nisi corrupti at maiores inventore illo ex
        aperiam debitis excepturi est maxime? Doloribus magni fugiat distinctio
        vitae. Similique ut consequuntur numquam necessitatibus iusto, rem
        incidunt velit. Quaerat nesciunt sunt fugit, nisi quis quos ipsam, odio
        eum esse officia odit inventore. Tenetur expedita excepturi recusandae
        voluptatum odit dignissimos consectetur. Ipsum expedita vitae aliquid
        tempora quibusdam amet! Nostrum illo, eum asperiores amet, laboriosam
        reprehenderit reiciendis ab quos quam expedita hic quia ipsa nisi! Atque
        consequuntur optio magni dolore at dolorem eius voluptatum. Corporis
        itaque totam dolorem repellat nam cum odit laboriosam, et adipisci,
        facere consequatur voluptates veritatis fugit ex recusandae labore
        incidunt architecto sapiente repellendus quidem!
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
        deleniti consectetur labore nobis libero? Voluptatum odio est enim
        doloremque laudantium id nisi, asperiores excepturi natus debitis
        inventore assumenda consequatur, magnam magni soluta voluptas expedita
        quibusdam iste veniam illum voluptatem? Quod fuga, magnam quisquam
        ratione laudantium velit neque voluptates totam suscipit impedit, est
        delectus iure tenetur facere cum! Soluta nobis qui repellat voluptatibus
        illum cum? Maxime error rem aliquam obcaecati vitae magni repellendus id
        fugit doloremque deserunt. Itaque consequatur quod debitis ducimus
        asperiores, quia explicabo ad? Hic quas in labore alias, quam, aperiam
        dolor soluta provident quasi dolores quidem vitae accusamus? Tempore
        facilis odit porro veniam sunt aspernatur, earum fugiat cumque officia
        neque eum voluptatem ex fugit ut. Veritatis at eligendi eaque ipsum esse
        saepe molestias perspiciatis beatae impedit eius exercitationem est
        totam quis consequuntur cumque accusamus architecto fugiat, rerum
        voluptate earum! Quia laudantium similique beatae, magnam delectus
        voluptatum voluptas sapiente recusandae culpa dicta cumque, nisi
        distinctio odit rem blanditiis, corporis doloremque! Odit, aliquid!
        Distinctio fuga ducimus, sunt laudantium fugiat nulla optio doloremque
        velit. Adipisci tenetur, hic fugit odit ipsa voluptates recusandae
        temporibus autem tempora ea! Quas perspiciatis molestiae eaque
        consectetur! Quia ea voluptates enim ut officia? Molestiae voluptatum
        nulla nostrum ullam natus eum? Amet vitae eos corporis repudiandae.
        Voluptates, voluptatum expedita? Ipsam delectus animi reprehenderit sint
        vel sed porro ipsa cupiditate. Itaque fugit corrupti voluptates, quis
        ipsum incidunt aliquam nesciunt dolorem odit nemo quia debitis
        consectetur eos ab similique aut ducimus, recusandae possimus. Vel
        deserunt porro aliquid sequi delectus eaque molestiae eum vero. Ipsum,
        similique autem! Nisi dignissimos ut harum, vitae voluptates, corporis
        dolore atque amet earum tenetur aliquam obcaecati voluptas! Accusantium
        accusamus officia sit earum minus alias neque velit. Culpa fugiat
        distinctio, quam magnam nesciunt nostrum quidem officiis! Dolore
        voluptas, ipsam cupiditate ab delectus odit, ipsum expedita nesciunt
        sequi quos excepturi sint iure optio vel. Illum molestias maxime, cum
        exercitationem laboriosam quibusdam sed fugit, tempore dicta incidunt
        et? Fugit temporibus est iste laborum dolorum. Dolore culpa deleniti cum
        possimus incidunt ipsa quis fugiat dolorem consectetur eum. Autem
        temporibus optio eius quis quaerat impedit amet sint error minus,
        voluptatem ipsa corrupti, recusandae commodi ratione odio, dolorem odit
        dicta labore porro corporis veniam harum! Distinctio consectetur aut
        molestias modi non. Sint, necessitatibus reprehenderit voluptatem, ipsa
        consectetur iusto facilis error odit eum deleniti earum! Vitae quod,
        commodi, omnis voluptatem in nesciunt voluptates cum ipsum incidunt
        esse, quidem molestias nisi corrupti at maiores inventore illo ex
        aperiam debitis excepturi est maxime? Doloribus magni fugiat distinctio
        vitae. Similique ut consequuntur numquam necessitatibus iusto, rem
        incidunt velit. Quaerat nesciunt sunt fugit, nisi quis quos ipsam, odio
        eum esse officia odit inventore. Tenetur expedita excepturi recusandae
        voluptatum odit dignissimos consectetur. Ipsum expedita vitae aliquid
        tempora quibusdam amet! Nostrum illo, eum asperiores amet, laboriosam
        reprehenderit reiciendis ab quos quam expedita hic quia ipsa nisi! Atque
        consequuntur optio magni dolore at dolorem eius voluptatum. Corporis
        itaque totam dolorem repellat nam cum odit laboriosam, et adipisci,
        facere consequatur voluptates veritatis fugit ex recusandae labore
        incidunt architecto sapiente repellendus quidem!
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
        deleniti consectetur labore nobis libero? Voluptatum odio est enim
        doloremque laudantium id nisi, asperiores excepturi natus debitis
        inventore assumenda consequatur, magnam magni soluta voluptas expedita
        quibusdam iste veniam illum voluptatem? Quod fuga, magnam quisquam
        ratione laudantium velit neque voluptates totam suscipit impedit, est
        delectus iure tenetur facere cum! Soluta nobis qui repellat voluptatibus
        illum cum? Maxime error rem aliquam obcaecati vitae magni repellendus id
        fugit doloremque deserunt. Itaque consequatur quod debitis ducimus
        asperiores, quia explicabo ad? Hic quas in labore alias, quam, aperiam
        dolor soluta provident quasi dolores quidem vitae accusamus? Tempore
        facilis odit porro veniam sunt aspernatur, earum fugiat cumque officia
        neque eum voluptatem ex fugit ut. Veritatis at eligendi eaque ipsum esse
        saepe molestias perspiciatis beatae impedit eius exercitationem est
        totam quis consequuntur cumque accusamus architecto fugiat, rerum
        voluptate earum! Quia laudantium similique beatae, magnam delectus
        voluptatum voluptas sapiente recusandae culpa dicta cumque, nisi
        distinctio odit rem blanditiis, corporis doloremque! Odit, aliquid!
        Distinctio fuga ducimus, sunt laudantium fugiat nulla optio doloremque
        velit. Adipisci tenetur, hic fugit odit ipsa voluptates recusandae
        temporibus autem tempora ea! Quas perspiciatis molestiae eaque
        consectetur! Quia ea voluptates enim ut officia? Molestiae voluptatum
        nulla nostrum ullam natus eum? Amet vitae eos corporis repudiandae.
        Voluptates, voluptatum expedita? Ipsam delectus animi reprehenderit sint
        vel sed porro ipsa cupiditate. Itaque fugit corrupti voluptates, quis
        ipsum incidunt aliquam nesciunt dolorem odit nemo quia debitis
        consectetur eos ab similique aut ducimus, recusandae possimus. Vel
        deserunt porro aliquid sequi delectus eaque molestiae eum vero. Ipsum,
        similique autem! Nisi dignissimos ut harum, vitae voluptates, corporis
        dolore atque amet earum tenetur aliquam obcaecati voluptas! Accusantium
        accusamus officia sit earum minus alias neque velit. Culpa fugiat
        distinctio, quam magnam nesciunt nostrum quidem officiis! Dolore
        voluptas, ipsam cupiditate ab delectus odit, ipsum expedita nesciunt
        sequi quos excepturi sint iure optio vel. Illum molestias maxime, cum
        exercitationem laboriosam quibusdam sed fugit, tempore dicta incidunt
        et? Fugit temporibus est iste laborum dolorum. Dolore culpa deleniti cum
        possimus incidunt ipsa quis fugiat dolorem consectetur eum. Autem
        temporibus optio eius quis quaerat impedit amet sint error minus,
        voluptatem ipsa corrupti, recusandae commodi ratione odio, dolorem odit
        dicta labore porro corporis veniam harum! Distinctio consectetur aut
        molestias modi non. Sint, necessitatibus reprehenderit voluptatem, ipsa
        consectetur iusto facilis error odit eum deleniti earum! Vitae quod,
        commodi, omnis voluptatem in nesciunt voluptates cum ipsum incidunt
        esse, quidem molestias nisi corrupti at maiores inventore illo ex
        aperiam debitis excepturi est maxime? Doloribus magni fugiat distinctio
        vitae. Similique ut consequuntur numquam necessitatibus iusto, rem
        incidunt velit. Quaerat nesciunt sunt fugit, nisi quis quos ipsam, odio
        eum esse officia odit inventore. Tenetur expedita excepturi recusandae
        voluptatum odit dignissimos consectetur. Ipsum expedita vitae aliquid
        tempora quibusdam amet! Nostrum illo, eum asperiores amet, laboriosam
        reprehenderit reiciendis ab quos quam expedita hic quia ipsa nisi! Atque
        consequuntur optio magni dolore at dolorem eius voluptatum. Corporis
        itaque totam dolorem repellat nam cum odit laboriosam, et adipisci,
        facere consequatur voluptates veritatis fugit ex recusandae labore
        incidunt architecto sapiente repellendus quidem!
      </p>
      <Suspense fallback={<h1>"Loading..."</h1>}>
        <MyComponent />
      </Suspense>
    </>
  );
}

export default App
