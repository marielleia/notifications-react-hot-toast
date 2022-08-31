import "./App.css";
import {Toaster, toast} from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <button onClick={()=>toast.success('Hello World')}>Hello World</button>
      <p>
        orem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor
        ipsum vitae augue commodo, ac euismod ipsum mollis. Aliquam dictum nisl
        sed nunc tempor, a ullamcorper sem porttitor. Ut sollicitudin, metus a
        dignissim porta, diam purus malesuada mauris, eu mollis ligula arcu eget
        lectus. Integer semper enim nulla, at pellentesque purus rutrum gravida.
        Curabitur nisl urna, imperdiet at mi non, rutrum varius odio. Sed
        faucibus aliquet sapien, fringilla auctor lectus dapibus vel. Duis et
        vehicula quam. Aliquam rutrum euismod nibh, quis convallis turpis
        pharetra eget. Vivamus scelerisque, nunc eget consequat vestibulum,
        lacus nulla fermentum dolor, vitae euismod felis massa at velit. Morbi
        dictum magna justo. Integer viverra consequat metus non semper. Nam
        fringilla magna sit amet mi aliquet, ut elementum augue aliquam. Vivamus
        scelerisque turpis ante, sit amet hendrerit tortor sodales a. Donec
        convallis varius semper. Suspendisse ut orci gravida, posuere nisl
        dignissim, sodales metus. In eget rutrum elit, vel consectetur purus.
        Sed scelerisque finibus nulla fermentum suscipit. Fusce accumsan finibus
        ligula. Nam ut rutrum lacus. Nulla lobortis elit eu sodales interdum.
        Maecenas ut accumsan augue. Ut vel iaculis lacus, eget faucibus odio.
        Pellentesque ac malesuada mi. Mauris vel mauris ultrices, dictum diam
        eu, fringilla ipsum. Donec accumsan, lectus at gravida vestibulum, nunc
        urna porta augue, ut malesuada libero diam sit amet quam. Cras tempus
        turpis nec eros pulvinar, in sollicitudin sem molestie. In nunc libero,
        hendrerit eu vehicula sit amet, posuere quis orci. Vestibulum at mauris
        varius, lobortis velit ut, rhoncus metus. Fusce pellentesque arcu ut
        nibh maximus, non suscipit dui hendrerit. Vivamus sed ipsum pharetra,
        tincidunt dolor a, auctor urna. Cras ac sagittis tortor. Curabitur et
        augue velit. Nam gravida, erat ut efficitur facilisis, tortor purus
        blandit augue, ac fringilla dolor metus sed lacus. Maecenas a libero vel
        mi varius lacinia non rutrum ante. Morbi ut hendrerit enim.
      </p>
      <Toaster
      position='top-right'
      reverseOrder={false}
      gutter={8}
      toastOptions={{
        style:{
          background: '#363636',
          color: '#fff',
        }
      }}/>
    </div>
  );
}

export default App;
