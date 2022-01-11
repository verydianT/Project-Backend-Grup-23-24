const WisataModel = require("../models/wisata");

class WisataController {
    static async inputWisata(req, res) {
        try {
            const body = req.body;
            const name = body.name;
            const address = body.address;
            const street = body.address.street;
            const district = body.address.district;
            const sub_district = body.address.sub_district;
            const city = body.address.city;
            const postal_code = body.address.postal_code;
            const state = body.address.state;
            const image = body.image;
            const email = body.email;
            const phone_number = body.phone_number;
            const url = body.url;

            const wisata = new WisataModel ({
                name: name,
                address: address,
                street: street,
                district: district,
                sub_district: sub_district,
                city: city,
                postal_code: postal_code,
                state: state,
                image: image,
                email: email,
                phone_number: phone_number,
                url: url
            });

            const saved = await wisata.save();
            res.status(201).send(saved);            

        } catch (error) {
            console.log(error)
            res.status(500).send({ err: error})
        }
    }

    static async viewAllWisata(req, res) {
        try {
            const sort = req.query.sort
            const city = req.query.city
            if(sort == "latest"){
                
                const wisataList = await WisataModel.find().sort({ createdAt: -1})
                res.status(200).send(wisataList);
            
            }else if(sort == "oldest"){
                
                const wisataList = await WisataModel.find().sort({ createdAt: 1})
                res.status(200).send(wisataList);
            } else if (city) {
                const wisataList = await WisataModel.find({'address.city': city})
                res.status(200).send(wisataList);
                console.log(wisataList)
            } else {
                const wisataList = await WisataModel.find()
                res.status(200).send(wisataList);
            }
        } catch (error) {
            res.status(500).send({err : error})
            console.log(error)
        }
    }

    static async viewWisataById (req, res) {
        try {
            const id = req.params.id;

            const wisataList = await WisataModel.findOne({_id: id})
            res.status(200).send(wisataList)
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async updateWisata(req, res) {
        try {
            const id = req.params.id
            const body = req.body
            const name = body.name;
            const address = body.address;
            const street = body.address.street;
            const district = body.address.district;
            const sub_district = body.address.sub_district;
            const postal_code = body.address.postal_code;
            const state = body.address.state;
            const image = body.image;
            const email = body.email;
            const phone_number = body.phone_number;
            const url = body.url;

            await WisataModel.updateOne({_id: id}, {
                name: name,
                address: address,
                street: street,
                district: district,
                sub_district: sub_district,
                postal_code: postal_code,
                state: state,
                image: image,
                email: email,
                phone_number: phone_number,
                url: url,
            })

            res.status(200).send({message: "Success"})

        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async deleteWisata(req, res) {
        try {
            const id = req.params.id;
            await WisataModel.deleteOne({_id: id})
            res.status(200).send({message: `${id} has been Deleted`})
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

};

module.exports = WisataController;
