import React, { useContext } from 'react';
import { Link, Typography, Container, Button } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import Card from '../Card/Card';
import './Homepage.scss';
import { RouterContext } from '../../Contexts/RouteProvider';
import { ThemeContext } from '../../Contexts/ThemeProvider';
import { UserContext } from '../../Contexts/UserProvider';

const Homepage = React.memo(() => {
  const { user } = useContext(UserContext);
  const { history } = useContext(RouterContext);
  const { name } = useContext(ThemeContext);

  function onPlay() {
    if (history) {
      history.push(user ? '/rooms' : '/login');
    }
  }

  function onWindowOpen(target: string) {
    window.open(target);
  }

  function renderCards() {
    const cards = [
      { cardType: 'black', _id: '1', text: `During my first game of D&amp;D, I accidentally summoned _.`, pick: 1 },
      { cardType: 'white', _id: '2', text: `My inner demons.` }
    ];

    if (name === 'dark') {
      return cards.map((card, i) => <Card key={card._id} className={i === 0 ? 'first-card' : 'second-card'} card={card} />);
    }

    return cards.reverse().map((card, i) => <Card key={card._id} className={i === 0 ? 'first-card' : 'second-card'} card={card} />);
  }

  return <div>
    <section className="homepage-section title">
      <Container maxWidth="md">
        <div className="card-group-wrapper">
          <div className="card-group">
            {renderCards()}
          </div>
        </div>
        <div className="title-container">
          <Typography className="title" variant="h2" style={{ width: 200 }}>
            Cards Against Formality
        </Typography>
          <Typography className="subtitle" variant="h6" style={{ width: 200 }}>
            A terrible card game. For terrible people...
        </Typography>
          <div className="play-button-container">
            <Button className="play-button" variant="contained" color="primary" onClick={onPlay}>Play</Button>
          </div>
        </div>
      </Container>

    </section>
    <section className="homepage-section even">
      <Container maxWidth="md">
        <Typography className="title" variant="h2" style={{ color: "black" }}>
          About
        </Typography>
        <Typography variant="body1" style={{ color: "black" }}>
          Cards Against Formality is a party card game based on <Link rel="noopener" onClick={() => onWindowOpen('https://cardsagainsthumanity.com/')}>Cards Against Humanity</Link>.
          The game is still under development. However, it is fully functional on larger devices!
        </Typography>
        <br />
        <Typography variant="body1" style={{ color: "black" }}>
          This is an Open Source project. To find out more, visit <Link onClick={() => onWindowOpen('https://github.com/jordanpawlett/cards-against-formality')} rel="noopener">github</Link>.
        </Typography>
        <br />
        <Typography variant="body1" style={{ color: "black" }}>
          Servers are expensive! Whilst this application is under development, there will be a small routine maintenance period to save on server costs. This will normal occur sometime between 3-7am UTC+1
        </Typography>
      </Container>
    </section>
    <section className="homepage-section footer">
      <div className="link-icons">
        <TwitterIcon className="icon" fontSize="large" onClick={() => onWindowOpen('https://twitter.com/CardsFormality')} />
        <GitHubIcon className="icon" fontSize="large" onClick={() => onWindowOpen('https://github.com/jordanpawlett/cards-against-formality')} />
        <LinkedInIcon className="icon" fontSize="large" onClick={() => onWindowOpen('https://www.linkedin.com/in/jordanpawlett/')} />
      </div>
      <Typography variant="caption">
        To view the privacy and terms of use, click <Link color="secondary" onClick={() => onWindowOpen('https://htmlpreview.github.io/?https://github.com/JordanPawlett/cards-against-formality-pwa/blob/master/public/privacy_policy.html')}>here</Link> and <Link color="secondary" onClick={() => onWindowOpen('https://htmlpreview.github.io/?https://github.com/JordanPawlett/cards-against-formality-pwa/blob/master/public/license.html')}>here</Link>
      </Typography>
    </section>
  </div>;
});

export default Homepage;
