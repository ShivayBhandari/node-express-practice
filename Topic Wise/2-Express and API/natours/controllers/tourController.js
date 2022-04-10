const Tour = require('./../models/tourModel');

exports.getAllTours = (req, res) => {
    console.log(req.requestTime);
    res.status(200).json({
        status: 'success',
        requestedAt: req.requestTime,
        // results: tours.length,
        // data: {
        //     tours    //same as tours: tours
        // }
    });
};

exports.getTour = (req, res) => {
    const id = req.params.id * 1;
    // const tour = tours.find(el => el.id === id);

    // res.status(200).json({
    //     status: 'success',
    //     data: {
    //         tour: tour
    //     }
    // });
};

exports.createTour = (req, res) => {
    res.status(201).json({
        status: 'success',
        // data: {
        //     tour: newTour
        // }
    });
}

exports.updateTour = (req, res) => {


    res.status(200).json({
        status: 'success',
        data: {
            tour: 'Updated tour'
        }
    });
};

exports.deleteTour = (req, res) => {

    res.status(204).json({
        status: 'success',
        data: null
    });
};