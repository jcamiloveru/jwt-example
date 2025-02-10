export const profile = (req, res) => {
    res.status(200).json({ yourToken: req.token });
};
