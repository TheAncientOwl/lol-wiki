import axios from 'axios';
import { useEffect, useState } from 'react';
import { BigCardProfile } from './BigCardProfile';
import '../scss/BigCard.scss';

export const BigCard = ({ championName }) => {
  const [profile, setProfile] = useState({});
  const [lore, setLore] = useState({});
  const [spells, setSpells] = useState({});
  const [skins, setSkins] = useState([]);
  const [overview, setOverview] = useState({});

  useEffect(() => {
    axios.get(`/api/${championName}/profile`).then(response => setProfile(response.data));
    axios.get(`/api/${championName}/lore`).then(response => setLore(response.data));
    axios.get(`/api/${championName}/spells`).then(response => setSpells(response.data));
    axios.get(`/api/${championName}/skins`).then(response => setSkins(response.data));
    axios.get(`/api/${championName}/overview`).then(response => setOverview(response.data));
  }, [championName]);

  return (
    <div className='card big-card'>
      <section className='big-card-data-wrap'>
        <BigCardProfile avatarURL={profile.avatarURL} name={profile.name} title={profile.title} />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe dolores reiciendis pariatur optio eius impedit
        repellat adipisci quos labore accusantium. Ducimus perspiciatis repellendus aspernatur ullam nesciunt vel error
        consequatur vitae, temporibus enim placeat consequuntur delectus commodi sed hic omnis, iusto dolores quos
        voluptas recusandae! Magnam magni dignissimos esse molestias! Minima cum nesciunt necessitatibus reiciendis
        optio ad excepturi, ipsa, velit quam exercitationem mollitia eveniet labore atque. Nesciunt, ipsum? Fuga cumque
        consequatur accusamus quidem adipisci corporis ratione vel nemo deserunt atque ab cum doloremque quod quis eum
        iusto ea aliquid, consequuntur voluptas assumenda. Deleniti, dolore blanditiis! Quisquam, perspiciatis inventore
        ad laboriosam architecto quasi iusto ea ex quo voluptatem dolorem deserunt similique ducimus, suscipit tempore
        consectetur debitis autem expedita mollitia beatae veritatis asperiores, veniam quam. Nulla animi temporibus
        nihil possimus iure pariatur quis quod nobis odit enim. Laudantium alias laboriosam nam suscipit natus id minima
        magnam facere iure beatae aliquam nobis, neque rem, ipsam officia dicta? Modi corrupti autem placeat rem, fuga a
        commodi fugit qui, ipsa magnam odio quas consequatur voluptatem odit cumque recusandae accusantium cupiditate ab
        optio delectus, expedita mollitia nobis? Animi voluptate accusantium repellat voluptas delectus saepe sit culpa
        reiciendis non incidunt error totam ipsa, quam, ratione earum eligendi distinctio hic sed sequi. Repellat,
        exercitationem velit architecto assumenda deserunt consectetur voluptas dolores! Quibusdam aliquam ab iure
        natus, est nulla? Sunt, voluptatem iusto, tempore ea inventore voluptate quisquam atque accusantium dicta odio
        ipsa. Repellendus eaque consequatur reiciendis, repudiandae quaerat vero harum officia officiis maiores aperiam
        veritatis itaque culpa omnis labore molestias sed saepe possimus nemo doloremque dicta consequuntur minima
        voluptas quibusdam facere. Ratione porro eos rem nemo esse odit accusantium eligendi in dolorem. Totam in natus
        necessitatibus voluptatibus esse? Voluptatum minus fuga aliquid, neque odio culpa atque, asperiores ab nobis
        ipsam voluptatibus sit consectetur deleniti labore velit tempore omnis. Dolor aliquam numquam, adipisci unde
        atque provident perferendis, quam accusamus velit et sint! Nostrum voluptas, esse nemo vel harum nulla optio
        dolore doloremque autem minima ducimus dolor iusto, consequatur saepe. Adipisci autem consequatur, nostrum
        veniam cumque voluptate deleniti vitae velit tempora qui neque dolores voluptas quis tempore fugit atque ipsam
        deserunt eos, voluptatibus a eveniet. Ullam velit exercitationem eveniet libero, harum sed possimus porro
        aperiam culpa voluptate beatae nulla impedit adipisci ea perferendis? Nisi et eos ratione fugiat earum ipsa
        commodi, doloribus sint a labore. Aliquam, ducimus quaerat. Quam tenetur pariatur distinctio error deleniti
        facere blanditiis assumenda eum fugiat obcaecati veritatis totam, laborum ea eaque reprehenderit ab amet
        accusantium voluptatem nostrum aliquam ex! Unde assumenda quasi amet enim labore possimus cum nostrum aliquam
        tempore sint? Inventore provident cum autem ad, facilis excepturi amet rem recusandae non nostrum soluta ea
        nisi, aliquam obcaecati tempore, reprehenderit voluptas alias odio ratione dicta officiis accusantium ipsum?
        Voluptate impedit culpa nulla animi eius natus, asperiores facilis quibusdam hic delectus sed veritatis
        perferendis magnam quasi debitis eos architecto sit ut nemo possimus porro rerum. Sit explicabo at
        exercitationem sunt! Totam accusamus, eligendi nesciunt minus perferendis provident neque quasi nam deleniti
        debitis et mollitia impedit ipsam eveniet, repellat vero iusto, ullam illum eum. Vitae debitis odio eum fugiat
        alias obcaecati mollitia velit consequatur voluptatum commodi eligendi, magni dolore, iusto reprehenderit
        pariatur facilis totam minus nobis! Vitae quod, repudiandae reprehenderit unde saepe veritatis reiciendis
        assumenda quos repellendus cumque, eos hic magni porro quia, odit praesentium iusto atque fugiat accusamus
        voluptas. Earum a culpa ea, voluptatem quia minima quisquam voluptates esse in facilis velit, odio molestiae
        laboriosam ipsam. Vitae sapiente similique non officiis beatae veniam minus rerum libero quaerat eius labore
        maiores obcaecati reprehenderit facilis, laudantium eveniet odit, blanditiis neque ipsam sint expedita?
        Necessitatibus pariatur sequi iste molestias optio commodi quam, doloremque voluptates non illo? Harum cum
        voluptas nisi ad recusandae, temporibus fugit quos iure inventore! Rem maxime ducimus laudantium omnis quaerat
        fugiat deserunt suscipit sequi, corporis impedit, ullam minima sint! Reiciendis quam distinctio natus sint a
        amet ipsum omnis autem possimus, reprehenderit voluptates sunt inventore fugit suscipit aliquam? Rerum totam
        aliquid consequatur commodi quam consequuntur minus quibusdam, nam earum numquam, molestias sunt dolores
        voluptatibus provident ipsam dignissimos dolore sapiente iure dolorem? Illum doloremque nesciunt iusto amet eum
        laboriosam magni velit quia quam blanditiis exercitationem aliquid, dicta assumenda obcaecati cumque ex nihil
        esse hic. Consectetur repellat dolores aperiam asperiores ab! Tenetur maiores illo vitae in quaerat harum
        placeat ducimus nobis, deserunt fugit nulla mollitia, laborum tempora labore sed laboriosam, quidem quasi error
        dicta accusamus facere sunt vero itaque. Illum culpa doloremque ratione quo sapiente, ex officia nulla? Labore
        cum fugit debitis eum sunt! Nam atque placeat accusantium perspiciatis, tempore natus aspernatur laborum iusto
        voluptatibus ex commodi dicta ad deserunt eligendi, magni, doloremque distinctio animi culpa. Id, ipsam
        repudiandae suscipit harum quaerat iure ipsa delectus alias, odio dignissimos impedit animi ut labore deserunt
        consectetur et omnis fuga nisi autem, distinctio aut dolorem corporis numquam. Rem soluta dolore ducimus facere
        alias? Repellat, temporibus nisi beatae deserunt repudiandae libero enim maxime voluptatum quasi aliquam quas
        exercitationem quos voluptates illum doloremque natus ipsam quibusdam perferendis non fugit tenetur blanditiis
        facere. Quibusdam deleniti nostrum facilis dolorum id voluptate velit maiores alias molestias corrupti eligendi
        ratione temporibus reprehenderit, itaque pariatur, hic harum neque voluptatibus provident a, libero error
        aperiam amet sed. Quas ipsam exercitationem obcaecati odio iste suscipit autem cum aspernatur porro provident
        quidem, alias eos quam sit quasi libero nobis ex ut. Asperiores quas necessitatibus, non fugit modi nihil rem!
        Totam accusantium odio, error officia repudiandae amet quam rem consequuntur assumenda. Eveniet impedit cumque
        recusandae nihil laborum repudiandae voluptas assumenda, nesciunt at cum quaerat officiis saepe voluptates
        mollitia maiores inventore dolorem ratione atque? Delectus inventore numquam, maxime nobis possimus quos rerum
        recusandae, tempora quas, voluptate velit neque vitae explicabo error blanditiis! Eum vero ex veniam quibusdam
        recusandae voluptas ipsa commodi architecto odit totam fugiat quidem, quo hic doloremque. Perferendis tenetur
        iusto ea laboriosam possimus obcaecati, assumenda nulla maiores expedita dolores culpa esse saepe quam placeat
        neque, quia ducimus? Nemo suscipit repellat accusantium, eveniet blanditiis dignissimos. Quia, accusamus.
        Dolorem et eaque ad dolorum reprehenderit blanditiis consequatur officiis eius sint voluptas animi temporibus,
        ducimus est expedita, deserunt dolores.
      </section>
      <setcion className='card big-card big-card-image-wrap' style={{ margin: 0, padding: 0 }}>
        <img src={overview.imageURL} alt={profile.name} className='big-card-image' />
      </setcion>
    </div>
  );
};
