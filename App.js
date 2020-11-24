
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <Text style{styles.welcome}>Absensi App </Text>*/}
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
          {/* search */}
          <View style={{ marginHorizontal: 17, flexDirection: 'row', paddingTop: 15 }}>
            <View style={{ position: 'relative', flex: 1 }}>
              <TextInput placeholder='Apakah kamu ingin mencari jadwal?' style={{ borderWidth: 1, borderColor: '#E8E8E8', borderRadius: 25, height: 40, fontSize: 13, paddingLeft: 45, paddingRight: 20, backgroundColor: 'white', marginRight: 18 }}></TextInput>
              <Image source={require('./icon/search.png')} style={{ position: 'absolute', top: 5, left: 12 }} />
            </View>
            <View style={{ width: 35, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require('./icon/scan.png')}></Image>
            </View>
          </View>
          {/* Absensi */}
          <View style={{ marginHorizontal: 17, marginTop: 8 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2C5FB8', borderTopLeftRadius: 4, borderTopRightRadius: 4, padding: 14 }}>
              <Image source={require('./icon/hadir.png')}></Image>
              <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>Hadir</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 20, paddingBottom: 14, backgroundColor: '#1E90FF', borderBottomLeftRadius: 4, borderBottomRightRadius: 4 }}>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Image source={require('./icon/buku.png')} />
                <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15 }}>Materi</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Image source={require('./icon/matakuliah.png')} />
                <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15 }}>Mata Kuliah</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Image source={require('./icon/kelas.png')} />
                <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15 }}>Ruangan</Text>
              </View>
            </View>
          </View>
          {/* ficture atas */}
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 18 }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '80%', marginHorizontal:35, marginBottom: 18 }}>
              <View style={{ width: '25%', alignItems: 'center' }}>
                <View style={{ width: 58, height: 58, borderWidth: 1, backgroundColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                  <Image style={{ width: 26, height: 26 }} source={require('./icon/datadosen.png')} />
                </View>
                <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>Data Dosen</Text>
              </View>
              <View style={{ width: '25%', alignItems: 'center' }}>
                <View style={{ width: 58, height: 58, borderWidth: 1, backgroundColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                  <Image style={{ width: 26, height: 26 }} source={require('./icon/datasiswa.png')} />
                </View>
                <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>Data Siswa</Text>
              </View>
              <View style={{ width: '25%', alignItems: 'center' }}>
                <View style={{ width: 58, height: 58, borderWidth: 1, backgroundColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                  <Image style={{ width: 26, height: 26 }} source={require('./icon/dataabsen.png')} />
                </View>
                <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>Data Absensi</Text>
              </View>
            </View>
            {/* ficture bawah */}
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '80%', marginHorizontal:35, marginBottom: 18 }}>
              <View style={{ width: '25%', alignItems: 'center' }}>
                <View style={{ width: 58, height: 58, borderWidth: 1, backgroundColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                  <Image style={{ width: 26, height: 26 }} source={require('./icon/datajadwal.png')} />
                </View>
                <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>Data Jadwal</Text>
              </View>
              <View style={{ width: '25%', alignItems: 'center' }}>
                <View style={{ width: 58, height: 58, borderWidth: 1, backgroundColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                  <Image style={{ width: 26, height: 26 }} source={require('./icon/laporan.png')} />
                </View>
                <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>laporan</Text>
              </View>
              <View style={{ width: '25%', alignItems: 'center' }}>
                <View style={{ width: 58, height: 58, borderWidth: 1, backgroundColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                  <Image style={{ width: 26, height: 26 }} source={require('./icon/riwayat.png')} />
                </View>
                <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>Riwayat</Text>
              </View>
            </View>
          </View>
            {/* NEW section */}
            <View style={{height: 17, backgroundColor: '#F2F2F4', marginTop:20}}></View>
              <View style={{paddingTop: 16, paddingHorizontal:16}}>

                
                <View style={{position:'relative'}}>
                  <Image source={require('./icon/gambar.jpg')} style={{height:170, width: '100%', borderRadius: 6}}></Image>
                  <View style={{width:'100%', height:'100%', position:'absolute', top: 0, left:0, backgroundColor: "black", opacity: 0.2, borderRadius: 6}}></View>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white', position:'absolute', top: 16, left:16}}>Ruang 201</Text>
                </View>
                <View style={{paddingTop:16, paddingBottom: 20, borderBottomColor:'#E8E9ED', borderBottomWidth: 1, marginBottom: 20}}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C'}}>Ruang Kelas</Text>
                  <Text style={{fontSize: 15, fontWeight: 'normal', color: '#7A7A7A', marginBottom: 11}}>Ini Ruangan kelas yang anda masukkan untuk sebuah pelajaran</Text>
                  <TouchableOpacity style={{backgroundColor:'#2C5FB8', paddingHorizontal:12, paddingVertical: 11, alignSelf:'flex-end', borderRadius: 4}}>
                    <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Detail</Text>
                  </TouchableOpacity>
                </View>
              </View>
        </ScrollView>
        <View style={{ height: 54, flexDirection: 'row', backgroundColor: 'white' }}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ width: 26, height: 26 }} source={require('./icon/home-active.png')} />
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4, color: '#1E90FF' }}>Beranda</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ width: 26, height: 26 }} source={require('./icon/jadwal.png')} />
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Jadwal</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ width: 26, height: 26 }} source={require('./icon/card.png')} />
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Kartu</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ width: 26, height: 26 }} source={require('./icon/help.png')} />
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Help</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ width: 26, height: 26 }} source={require('./icon/profile.png')} />
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Profile</Text>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({

});