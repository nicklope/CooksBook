import NavBar from '../components/NavBar'
const About = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div id="about-container">
        <h1 id="about-title">
          A Network for People <em>Passionate</em> about Food
        </h1>
        <h2 id="first-block">
          My name is Nick Lopez. I developed cooksbook. For most of my adult
          life, I've been passionate about cooking (just food in general,
          really). I love sharing my passion with others, and as a result of
          that I spent 90% of my time on social media sharing food pics. This
          app was born from that. Cooksbook is a space dedicated to sharing
          pictures of food and recipes.
        </h2>
        <h1 id="about-title">
          Navigating <em>The Rack</em>
        </h1>
        <h2 id="first-block">
          On the top of every page, you'll find The Rack. The Rack contains all
          of the spices you'll need to navigate cooksbook. At anytime, you can
          click the cook book in the top left corner to return to the main page.
          On the right side of the rack, you'll find the fire logo and search
          bar. Click the fire logo to navigate to the Fire Rail (more on that in
          a bit). The search bar allows users to search by tag. Type in a tag
          name, and associated Tickets will be displayed on the search rail.
        </h2>
        <h1 id="about-title">
          The Feed? No. <em>The Rail</em>
        </h1>
        <h2 id="first-block">
          The main page displays The Rail. The Rail is where you'll find all of
          the Tickets from newest to oldest. Tickets can be added by clicking
          New Ticket + in The Rail header. Each Ticket displays a brief overview
          of the associated recipe. You can click "View Full Ticket" to navigate
          to the Full Ticket page, where search tags can be added. The Full
          Ticket page also allows users to update/delete tickets.
        </h2>
        <h1 id="about-title">
          <em>Fired up</em>
        </h1>
        <h2 id="first-block">
          If you've visited The Rail, you'll notice a fire logo at the end of
          each ticket. Clicking the
        </h2>
      </div>
    </div>
  )
}
export default About
