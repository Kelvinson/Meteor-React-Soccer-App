import React, { Component } from 'react';
import {Card, CardMedia, CardHeader,CardTitle,CardText,CardActions} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import { blue200, blue900 } from 'material-ui/styles/colors';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin:12,
  },
};

export default class Player extends Component {
  render() {
    return (
      <Card>
        <CardMedia
          overlay={<CardTitle title="Wang Dong" subtitle="A super player with offense: 20 Defense: 13" />}
          >
            <img src="player.jpg" alt="Wang Dong" />
          </CardMedia>
          <CardText>
            <div style={styles.wrapper}>
            <Chip
              backgroundColor={blue200}
              style={styles.chip}
              >
                <Avatar size={32} color={blue200} backgroundColor={blue900}>
                  4
                </Avatar>
                Ball manipulation
              </Chip>
              <Chip
                backgroundColor={blue200}
                style={styles.chip}
                >
                  <Avatar size={32} color={blue200} backgroundColor={blue900}>
                    4
                  </Avatar>
                  Kicking abilities
                </Chip>
                <Chip
                  backgroundColor={blue200}
                  style={styles.chip}
                  >
                    <Avatar size={32} color={blue200} backgroundColor={blue900}>
                      3
                    </Avatar>
                    Duel/Tackling abilities
                  </Chip>
                  <Chip
                    backgroundColor={blue200}
                    style={styles.chip}
                    >
                      <Avatar size={32} color={blue200} backgroundColor={blue900}>
                        4
                      </Avatar>
                      Field speed coverage
                    </Chip>
                    <Chip
                      backgroundColor={blue200}
                      style={styles.chip}
                      >
                        <Avatar size={32} color={blue200} backgroundColor={blue900}>
                          3
                        </Avatar>
                        Blocking abilities
                      </Chip>
                      <Chip
                        backgroundColor={blue200}
                        style={styles.chip}
                        >
                          <Avatar size={32} color={blue200} backgroundColor={blue900}>
                            4
                          </Avatar>
                          Game stratigies
                        </Chip>
                        <Chip
                          backgroundColor={blue200}
                          style={styles.chip}
                          >
                            <Avatar size={32} color={blue200} backgroundColor={blue900}>
                              3
                            </Avatar>
                            Playing risks
                          </Chip>
                        </div>
                        </CardText>
                        <CardActions>

                        </CardActions>
                      </Card>
                    )
                  }
                }
