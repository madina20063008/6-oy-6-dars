
import React, { useState, useEffect } from "react";
import "./App.css";
import logo from './assets/logo.png';
import backPNG from './assets/bg.png';
import search from './assets/search.png';
import work from './assets/work.png';
import frame from './assets/Frame.png';
import frame1 from './assets/Frame1.png';
import one from './assets/1.png';
import two from './assets/2.png';
import three from './assets/3.png';



function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);


  const news = [
    {
      image: one,
      title: "Est commodo nulla pulvinar amet dictum. Tincidunt tincidunt interdum faucibus ipsum quis eleifend amet sit. Ac sodis sodales viverra viverra.",
      details:
        "Tincidunt ut et phasellus enim sed eget diam erat ultrices. Eu tristique diam lectus platea orci sed cursus. Egestas lorem tincidunt pellentesque dolor volutpat lacus platea. Varius."
    },
    {
      image: two,
      title: "Sapien odio eu et quis ornare. Amet ultrices mauris pellentesque aliquam et. Fermentum cursus.",
      details:
        "Lacus ut in vel blandit lectus et fermentum et vulputate. Amet netus gravida et facilisi sit cursus lobortis pellentesque. Vestibulum a pulvinar eu proin a tincidunt."
    },
    {
      image: three,
      title: "Lectus sagittis non id ut eget tellus aenean. Pretium scelerisque pellentesque in lacus ultrices mauris tempor. Est cursus laoreet in dictumst arcu.",
      details:
        "Vestibulum id pulvinar enim molestie erat suscipit montes hendrerit. Integer ac egestas tempor nisl. Vel vitae quam nisi egestas tincidunt facilisi non faucibus. Mi sed et id."
    }
  ];
  return (
    <div>


      {/* Header */}


      <div style={{ backgroundImage: `url(${backPNG})` }} className="bg-cover bg-center min-h-screen text-white">
        <div className=" h-screen relative px-8 max-w-[1200px] mx-auto">

          <div className="flex justify-between items-center py-6">
            <img src={logo} alt="Logo" />
            <div className="flex ">
              <input type="search" placeholder="Быстрый поиск по сайту" className="bg-transparent border-b border-white text-white outline-none placeholder-white pb-4 w-[250px]" />
              <img src={search} alt="Logo" className="h-5 mt-[20px] ml-[10px]" />
            </div>
            <div className="flex gap-8 items-center">
              <div className="flex gap-3 text-sm">
                <span className="cursor-pointer hover:underline">Ru</span>
                <span className="cursor-pointer hover:underline">En</span>
              </div>
            </div>
          </div>

          <nav className=" border-t border-b border-white border-opacity-50 py-4">
            <ul className="flex justify-between text-[16px] opacity-90 ">
              <li className="cursor-pointer hover:underline">О компании</li>
              <li className="cursor-pointer hover:underline">Деятельность</li>
              <li className="cursor-pointer hover:underline">Персонал</li>
              <li className="cursor-pointer hover:underline">Клиенту</li>
              <li className="cursor-pointer hover:underline">Акционеру и инвестору</li>
              <li className="cursor-pointer hover:underline">Пресс-центр</li>
              <li className="cursor-pointer hover:underline">Торги</li>
              <li className="cursor-pointer hover:underline">Контакты</li>
            </ul>
          </nav>

          <div className="mt-20 max-w-lg">
            <h1 className="text-[33px] font-semibold leading-snug ">
              Quis et quam quam sem scelerisque odio. Diam hendrerit purus dui nisl scelerisque in pharetra molestie. Nunc leo.
            </h1>
            <button className="mt-8 border-2 border-white py-3 px-8 hover:bg-white hover:text-black transition-all mt-[60px]">Подробнее</button>
            <div className="mt-6 flex gap-3 mt-[60px]">
              <div className="w-10 h-2 bg-white "></div>
              <div className="w-10 h-1.5 bg-gray-500 mt-[3px]"></div>
              <div className="w-10 h-1.5 bg-gray-500 mt-[3px]"></div>
            </div>
          </div>

          <div className="absolute right-20 top-1/2 transform -translate-y-1/2 text-center mt-[100px]">
            <div className="relative w-44 h-44 flex items-center justify-center  " >
              <div className="absolute w-44 h-44 border-2 border-white rounded-full"></div>
              <div className="absolute w-36 h-36 border-2 border-white rounded-full"></div>
              <div className="relative text-[30px] font-bold ">99,995%</div>
            </div>
            <p className="mt-3 text-[16px] opacity-90 mt-[28px]">Nisi nulla ultrices amet cras <br /> tincidunt nec. Dolor magna.</p>
          </div>
        </div>
      </div>


      {/* Cards */}


      <div className="grid grid-cols-3 gap-4 p-8 max-w-[1200px] mx-auto mt-[130px]">
        {users.slice(0, 10).map((user, index) => (
          <div
            key={user.id}
            className={`relative border border-[#1840A7] h-[250px] flex flex-col justify-between ${index === 0 ? "bg-blue-700 text-white" : "bg-white text-gray-900"}`}
          >
            <span className="text-[96px] pb-[40px] font-bold text-blue-400 absolute bottom-[140px] right-4 top-[30px]">
              {user.id}
            </span>
            <div className="p-6 ml-[10px] mt-[20px]">
              <h2 className="text-[24px] font-bald ">{user.name}</h2>
              <p className="text-sm mt-[20px]">{user.email}</p>
              <p className="text-sm mt-[16px]">{user.company.name}</p>
            </div>

          </div>
        ))}
      </div>


      {/* Main */}


      <div className="flex items-center justify-between p-8 max-w-[1100px] mx-auto mt-[130px]">

        <div className="w-1/2 pr-8 max-w-[450px]">
          <h2 className="text-xl font-bold text-[#333333]">Lectus nisi sed id dictum. Adipiscing</h2>
          <p className="mt-4 text-gray-700">
            Commodo faucibus justo turpis id lectus ac fringilla scelerisque accumsan.
            Fames lectus nibh non ultrices id ut sed praesent in. At tristique nunc
            pellentesque odio. Blandit scelerisque dolor molestie egestas nunc nunc sit.
            Fermentum at pharetra odio risus malesuada diam laoreet eleifend vulputate.
            Enim molestie lorem nec ipsum nunc sit commodo non. Euismod rhoncus ut amet
            diam porta nisi tempus. Posuere suspendisse suscipit dolor enim. A lectus
            convallis quis elementum. Vitae pretium nunc venenatis felis.
          </p>
          <p className="mt-4 text-gray-700">
            Una orci blandit imperdiet feugiat scelerisque dui at velit ac. Sollicitudin
            placerat in viverra amet in praesent vestibulum. Suscipit interdum odio
            pellentesque diam et.
          </p>

          <div className="mt-[40px] flex space-x-4 ml-[50px]">
            <button className="bg-[#1840A7] text-white px-6 py-2">aaddd@test.ru</button>
            <button className="bg-[#1840A7] text-white px-6 py-2">dvs@test.ru</button>
          </div>
        </div>

        <div className="w-1/2">
          <img src={work} alt="work" />
        </div>
      </div>

      <div className="text-center p-8 max-w-[900px] mx-auto">
        <h2 className="text-[30px] mt-[110px] font-bold text-[#333333]">
          Vel pretium pellentesque enim morbi
        </h2>

        <div className="border border-[#1840A7] p-4 mt-[80px] mb-[50px] inline-block text-gray-600">
          Et aliquam eu feugiat vel egestas semper <br /> elementum. Bibendum eget massa.
        </div>

        <div className="mt-8 flex justify-center gap-5">
          <div className="bg-[#1840A7] text-white p-6 w-[350px] h-[250px] flex flex-col items-center shadow-md">
            <img src={frame} alt="Feature 1" className="mb-4" />
            <p className="font-semibold text-[24px]">Enim ac sagittis tempus iaculis blandit. Tellus.</p>
          </div>
          <div className="bg-[#1840A7] text-white p-6 w-[350px] h-[250px] flex flex-col items-center shadow-md">
            <img src={frame1} alt="Feature 2" className="mb-4" />
            <p className="font-semibold text-[24px]">Ultricies erat sagittis est dictum leo est nibh a.</p>
          </div>
        </div>
      </div>

      <div className=" p-8 max-w-[1200px] mx-auto">
        <h2 className="text-2xl mt-[110px] font-bold text-[#333333] text-[30px] mb-[80px] text-gray-900 text-center ">Новости компании</h2>

        <div className="mt-8 flex justify-between gap-4 border border-opacity-50 ">
          {news.map((item, index) => (
            <div key={index} className="border p-4  border-[#1840A7] w-1/3">
              <img src={item.image} alt="News" className="w-full h-40 object-cover" />
              <h3 className="font-semibold mt-4 text-[#333333] text-[16px]">{item.title}</h3>
              <p className="text-gray-600 mt-2 text-sm text-[14px]">{item.details}</p>
            </div>
          ))}
        </div>

        <div className="mt-[80px] text-center mb-[100px]">
          <button className="bg-[#1840A7] text-white px-6 py-2">Все новости</button>
        </div>
      </div>


      {/* Footer */}


      <footer className="bg-[#1840A7] text-white py-8 px-12">
  <div className="max-w-[1200px] mx-auto flex justify-between items-start">
    {/* Logo Section */}
    <div>
      <img src={logo} alt="Logo" />
    </div>

    {/* Navigation Links */}
    <div className="flex space-x-16">
      <ul className="text-sm mr-[60px] space-y-[10px]">
        <li className="flex items-center gap-[10px]">
          <span className="text-[25px]">▪</span> О компании
        </li>
        <li className="flex items-center gap-[10px]">
          <span className="text-[25px]">▪</span> Деятельность
        </li>
        <li className="flex items-center gap-[10px]">
          <span className="text-[25px]">▪</span> Персонал
        </li>
        <li className="flex items-center gap-[10px]">
          <span className="text-[25px]">▪</span> Клиенту
        </li>
      </ul>

      <ul className="text-sm space-y-[10px]">
        <li className="flex items-center gap-[10px]">
          <span className="text-[25px]">▪</span> Акционеру и инвестору
        </li>
        <li className="flex items-center gap-[10px]">
          <span className="text-[25px]">▪</span> Пресс-центр
        </li>
        <li className="flex items-center gap-[10px]">
          <span className="text-[25px]">▪</span> Торги
        </li>
        <li className="flex items-center gap-[10px]">
          <span className="text-[25px]">▪</span> Контакты
        </li>
      </ul>
    </div>

    {/* Location Section */}
    <div className="text-sm">
      <h3 className="font-semibold">Местонахождение</h3>
      <p className="mt-2 max-w-xs">
        Ante quam egestas tristique a malesuada massa aliquam ultrices. Et tellus nec.
      </p>
    </div>
  </div>

  {/* Bottom Footer Section */}
  <div className="flex max-w-[1200px] mx-auto justify-between mt-[50px]">
    <div>
      <p className="text-xs opacity-50 cursor-pointer">
        Dictum praesent dignissim pellentesque amet diam velit faucibus sed. Nec
        mattis posuere <br /> habitasse porta feugiat mattis enim. Quam interdum at
        penatibus amet elementum luctus.
      </p>
      <p className="mt-2 text-xs opacity-50 cursor-pointer">
        Политика обработки персональных данных
      </p>
    </div>
    <p className="text-xs opacity-50 text-right">Разработано: d-f-n.ru</p>
  </div>
</footer>


          </div>
          );
}

          export default App;














