import * as React from 'react';
import { Text, View, Image } from 'react-native';
import Constants from 'expo-constants';

const App = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <View
        style={{
          height: 50,
          borderBottomWidth: 0.5,
          borderColor: 'black',
          opacity: 0.2,
        }}></View>

      <View
        style={{
          width: 310,
          height: 30,
          backgroundColor: '#EAEAEA',
          alignSelf: 'center',
          marginTop: 10,
          borderRadius: 6,
        }}>
        <View
          style={{
            flexDirection: 'row',
            opacity: 0.6,
          }}>
          <Image
            source={require('assets/search.png')}
            style={{
              width: 20,
              height: 20,
              marginTop: 6,
              marginLeft: 8,
              paddingRight: 10,
            }}></Image>

          <Text
            style={{
              marginTop: 6,
              marginLeft: 12,
            }}>
            Search
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
        }}>
        <Image
          source={require('assets/avatar.png')}
          style={{
            width: 50,
            height: 50,
            marginTop: 20,
            marginLeft: 15,
          }}></Image>

        <View>
          <Text
            style={{
              fontWeight: 700,
              fontSize: 14,
              marginLeft: 20,
              marginTop: 25,
            }}>
            User Name
          </Text>
          <Text
            style={{
              fontWeight: 400,
              fontSize: 12,
              marginLeft: 20,
            }}>
            Name
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#2192FF',
            width: 80,
            height: 30,
            borderRadius: 4,
            justifyContent: 'center',
            marginTop: 25,
            marginLeft: 60,
          }}>
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              fontSize: 12,
            }}>
            Add
          </Text>
        </View>
        <Text
          style={{
            fontWeight: 700,
            opacity: 0.6,
            marginTop: 28,
            marginLeft: 10,
          }}>
          ...
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Image
          source={require('assets/avatar.png')}
          style={{
            width: 50,
            height: 50,
            marginTop: 10,
            marginLeft: 15,
          }}></Image>

        <View>
          <Text
            style={{
              fontWeight: 700,
              fontSize: 14,
              marginLeft: 20,
              marginTop: 18,
            }}>
            User Name
          </Text>
          <Text
            style={{
              fontWeight: 400,
              fontSize: 12,
              marginLeft: 20,
            }}>
            Name
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#2192FF',
            width: 80,
            height: 30,
            borderRadius: 4,
            justifyContent: 'center',
            marginTop: 18,
            marginLeft: 60,
          }}>
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              fontSize: 12,
            }}>
            Add
          </Text>
        </View>
        <Text
          style={{
            fontWeight: 700,
            opacity: 0.6,
            marginTop: 22,
            marginLeft: 10,
          }}>
          ...
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Image
          source={require('assets/avatar.png')}
          style={{
            width: 50,
            height: 50,
            marginTop: 10,
            marginLeft: 15,
          }}></Image>

        <View>
          <Text
            style={{
              fontWeight: 700,
              fontSize: 14,
              marginLeft: 20,
              marginTop: 18,
            }}>
            User Name
          </Text>
          <Text
            style={{
              fontWeight: 400,
              fontSize: 12,
              marginLeft: 20,
            }}>
            Name
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#2192FF',
            width: 80,
            height: 30,
            borderRadius: 4,
            justifyContent: 'center',
            marginTop: 18,
            marginLeft: 60,
          }}>
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              fontSize: 12,
            }}>
            Add
          </Text>
        </View>
        <Text
          style={{
            fontWeight: 700,
            opacity: 0.6,
            marginTop: 22,
            marginLeft: 10,
          }}>
          ...
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Image
          source={require('assets/avatar.png')}
          style={{
            width: 50,
            height: 50,
            marginTop: 10,
            marginLeft: 15,
          }}></Image>

        <View>
          <Text
            style={{
              fontWeight: 700,
              fontSize: 14,
              marginLeft: 20,
              marginTop: 18,
            }}>
            User Name
          </Text>
          <Text
            style={{
              fontWeight: 400,
              fontSize: 12,
              marginLeft: 20,
            }}>
            Name
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#2192FF',
            width: 80,
            height: 30,
            borderRadius: 4,
            justifyContent: 'center',
            marginTop: 18,
            marginLeft: 60,
          }}>
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              fontSize: 12,
            }}>
            Add
          </Text>
        </View>
        <Text
          style={{
            fontWeight: 700,
            opacity: 0.6,
            marginTop: 22,
            marginLeft: 10,
          }}>
          ...
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Image
          source={require('assets/avatar.png')}
          style={{
            width: 50,
            height: 50,
            marginTop: 10,
            marginLeft: 15,
          }}></Image>

        <View>
          <Text
            style={{
              fontWeight: 700,
              fontSize: 14,
              marginLeft: 20,
              marginTop: 18,
            }}>
            User Name
          </Text>
          <Text
            style={{
              fontWeight: 400,
              fontSize: 12,
              marginLeft: 20,
            }}>
            Name
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#2192FF',
            width: 80,
            height: 30,
            borderRadius: 4,
            justifyContent: 'center',
            marginTop: 18,
            marginLeft: 60,
          }}>
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              fontSize: 12,
            }}>
            Add
          </Text>
        </View>
        <Text
          style={{
            fontWeight: 700,
            opacity: 0.6,
            marginTop: 22,
            marginLeft: 10,
          }}>
          ...
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Image
          source={require('assets/avatar.png')}
          style={{
            width: 50,
            height: 50,
            marginTop: 10,
            marginLeft: 15,
          }}></Image>

        <View>
          <Text
            style={{
              fontWeight: 700,
              fontSize: 14,
              marginLeft: 20,
              marginTop: 18,
            }}>
            User Name
          </Text>
          <Text
            style={{
              fontWeight: 400,
              fontSize: 12,
              marginLeft: 20,
            }}>
            Name
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#2192FF',
            width: 80,
            height: 30,
            borderRadius: 4,
            justifyContent: 'center',
            marginTop: 18,
            marginLeft: 60,
          }}>
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              fontSize: 12,
            }}>
            Add
          </Text>
        </View>
        <Text
          style={{
            fontWeight: 700,
            opacity: 0.6,
            marginTop: 22,
            marginLeft: 10,
          }}>
          ...
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Image
          source={require('assets/avatar.png')}
          style={{
            width: 50,
            height: 50,
            marginTop: 10,
            marginLeft: 15,
          }}></Image>

        <View>
          <Text
            style={{
              fontWeight: 700,
              fontSize: 14,
              marginLeft: 20,
              marginTop: 18,
            }}>
            User Name
          </Text>
          <Text
            style={{
              fontWeight: 400,
              fontSize: 12,
              marginLeft: 20,
            }}>
            Name
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#2192FF',
            width: 80,
            height: 30,
            borderRadius: 4,
            justifyContent: 'center',
            marginTop: 18,
            marginLeft: 60,
          }}>
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              fontSize: 12,
            }}>
            Add
          </Text>
        </View>
        <Text
          style={{
            fontWeight: 700,
            opacity: 0.6,
            marginTop: 22,
            marginLeft: 10,
          }}>
          ...
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          height: 30,
          borderTopWidth: 1,
          marginTop: 10,
        }}>
        <Image
          source={require('assets/home.png')}
          style={{
            width: 25,
            height: 25,
            marginTop: 15,
            paddingLeft: 10,
            paddingRight: 10,
          }}></Image>
        <Image
          source={require('assets/search.png')}
          style={{
            width: 23,
            height: 23,
            marginLeft: 20,
            marginTop: 15,
            paddingLeft: 10,
            paddingRight: 10,
          }}></Image>
        <Image
          source={require('assets/add.png')}
          style={{
            width: 23,
            height: 23,
            marginLeft: 20,
            marginTop: 15,
            paddingLeft: 10,
            paddingRight: 10,
          }}></Image>
        <Image
          source={require('assets/like.png')}
          style={{
            width: 23,
            height: 23,
            marginLeft: 20,
            marginTop: 15,
            paddingLeft: 10,
            paddingRight: 10,
          }}></Image>
        <Image
          source={require('assets/profile.jpg')}
          style={{
            width: 30,
            height: 30,
            marginLeft: 20,
            marginTop: 12,
            paddingLeft: 10,
            paddingRight: 10,
          }}></Image>
      </View>
    </View>
  );
};

export default App;
