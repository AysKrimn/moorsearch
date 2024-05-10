import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function GridCard() {
  return (

    <Row xs={1} md={2} className="g-4">

        <Col>
          <Card className='no-border'>
            <Card.Body>
              <Card.Title className='text-center'>Investment Strategies</Card.Title>
              <Card.Text>
                Redlining and the legacy of race-based discrimination have left deep scars on our society, perpetuating systemic inequalities in access to financial resources. However, there's hope in investment strategies that empower individuals to break free from these historical constraints.
                Through avenues like banking, the stock market, index funds, and insurance policies, individuals can build wealth and secure their financial futures. The United Association of Moors offers free financial training to equip everyone with the knowledge needed to make sound investment decisions and compound their money effectively.
                By embracing these investment strategies, individuals can transcend historical injustices and pave the way for a more equitable society. Banking services provide essential financial tools, while the stock market and index funds offer opportunities for long-term wealth accumulation. Insurance policies serve as a safeguard against unforeseen circumstances, ensuring financial security for families and communities. The journey towards financial equity requires ongoing education, advocacy, and action to dismantle systemic barriers. By acknowledging our history and embracing investment opportunities, we can create a future where financial prosperity is accessible to all, regardless of race or background.
              </Card.Text>
            </Card.Body>

          </Card>

          
        </Col>


        <Col>
          <Card>
            <Card.Img variant="top" src="https://static.wixstatic.com/media/b5a44a_93cfb3d118ad461f8470dd94b05c647b~mv2.png/v1/fill/w_508,h_506,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b5a44a_93cfb3d118ad461f8470dd94b05c647b~mv2.png" />
          </Card>
        </Col>

    </Row>

    
  );
}