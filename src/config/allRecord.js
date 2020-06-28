import Fire from './config';

class AllRecord {

    // ########################################Tümsel Anasayfa - homepage / Firebase İşlemleri#########################################################################
    async getAnasayfa() {
        let anasayfaDto = await Fire.db.collection('Admin').doc('Anasayfa');
        return await anasayfaDto.get()
            .then(doc => {
                if (!doc.exists) {
                    console.log('No such document!');
                } else {
                    var data = doc.data();
                    return data
                }
            })
            .catch(err => {
                console.log('Error getting document', err);
            });
    }
    // ########################################Tümsel Anasayfa - homepage / Firebase İşlemleri#########################################################################

    //************************************************************************************************************************************************
    //************************************************************************************************************************************************
    //************************************************************************************************************************************************

    // ########################################Tümsel Profil - profile / Firebase İşlemleri#########################################################################
    async getProfil() {
        let profilDto = await Fire.db.collection('Admin').doc('Profil');
        return await profilDto.get()
            .then(doc => {
                if (!doc.exists) {
                    console.log('No such document!');
                } else {
                    var data = doc.data();
                    return data
                }
            })
            .catch(err => {
                console.log('Error getting document', err);
            });
    }
    // ########################################Tümsel Profil - profile / Firebase İşlemleri#########################################################################

    //************************************************************************************************************************************************
    //************************************************************************************************************************************************
    //************************************************************************************************************************************************

    // ########################################Tümsel CV - resume / Firebase İşlemleri#########################################################################
    async getCv() {
        let cvDto = await Fire.db.collection('Admin').doc('CV');
        return await cvDto.get()
            .then(doc => {
                if (!doc.exists) {
                    console.log('No such document!');
                } else {
                    var data = doc.data();
                    return data
                }
            })
            .catch(err => {
                console.log('Error getting document', err);
            });
    }
    // ########################################Tümsel CV - resume / Firebase İşlemleri#########################################################################

    //************************************************************************************************************************************************
    //************************************************************************************************************************************************
    //************************************************************************************************************************************************

    // ########################################Tümsel CV - resume / Firebase İşlemleri#########################################################################
    async getPortfolyo() {
        let portfolyoDto = await Fire.db.collection('Admin').doc('Portfolyo');
        return await portfolyoDto.get()
            .then(doc => {
                if (!doc.exists) {
                    console.log('No such document!');
                } else {
                    var data = doc.data();
                    return data
                }
            })
            .catch(err => {
                console.log('Error getting document', err);
            });
    }
}

export default new AllRecord();