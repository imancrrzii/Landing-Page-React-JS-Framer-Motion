import Banner from "../shared/banner"
import bannerImg from "../assets/images/22.png"


const Newsletter = () => {
  return (
    <div className="md:px-14 px-4 mx-auto max-w-screen-2xl my-12">
      <Banner banner={bannerImg} heading="Lorem ipsum dolor sit amet consectetur adipisicing elit." subHeading="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam sunt cupiditate dolore eligendi provident suscipit quis veritatis placeat? Soluta, fugiat." btn1={"I have a code"}/>
    </div>
  )
}

export default Newsletter
