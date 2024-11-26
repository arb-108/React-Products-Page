import hero from './hero.module.css'
const Hero = () => {
  return (
    <div>
      <div className={hero.box}>
        <div className={hero.left}>
            <h1>Your Feet Deserve the Better</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias molestiae, corporis ex vel nam nulla sunt enim maiores odio veniam odit fugiat culpa illum nesciunt facere natus eum neque explicabo non cumque id nihil reiciendis.</p>
            <div className={hero.btns}>
                <button className={hero.download_btn}>Download</button>
                <button className={hero.learn_btn}>Learn More</button>
            </div>
        </div>
        <div className={hero.right}>
            <img src="/images/hero-image.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
