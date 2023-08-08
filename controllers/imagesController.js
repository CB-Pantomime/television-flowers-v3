
// bring in Cloudinary
const { cloudinary } = require('../utils/cloudinary');

const getFlowers = async (req, res) => {

    // implementation of Fisher-Yates
    // takes an array as an input parameter and returns a shuffled version of the input array
    function shuffleArray(array) {
        // let halfLength = array.length / 2; 
        // console.log('half length of array: ', halfLength)
        // iterates over each element of the array in reverse order
        for (let i = array.length - 1; i > 0; i--) {
            // generate random index 'j' 
            // random returns floating point n between 0(incld.) and 1 (excld.)
            // .floor() rounds result down to nearest int 
            // (i + 1) determines the upper bound for the random index
            // Since 'i' decreases w/ each iteration of the loop, 'j' will be a
            // random index within the range of elements that haven't yet been shuffled
            const j = Math.floor(Math.random() * (i + 1));
            // shuffle i and j to j and i 
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    try {
        const { resources } = await cloudinary.search
            .expression('folder:television_flowers')
            .sort_by('created_at', 'desc')
            .max_results(62)
            .execute()
        
        const publicId = resources.map((file) => file.public_id);
        
        // console.log('success get. array length: ', publicId.length);
        // console.log('before shuffle - array of publicIds: ', publicId);

        let shuffledIds = shuffleArray(publicId)
        // console.log('after shuffle - array of publicIds: ', shuffledIds);
        
        const twelveShuffledIds = shuffledIds.slice(0, 14)
        console.log('length of shuffledIds: ',twelveShuffledIds.length)
        res.send(twelveShuffledIds);

    } catch {
        console.log(`This is a GET error: ${err}` + err);
        res.status(500).json({ msg: 'Something went wrong' });
    }
};

module.exports = {
    getFlowers
}