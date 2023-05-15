const user = require("../models/user");
const createQuiz = require("../models/createQuiz");

exports.deleteQuiz = async (req, res) => {
  try {
    const { email, quizId } = req.body;

    const loginuser = await user.findOneAndUpdate(
      { email: email },
      { $pull: { quizes: quizId } },
      { new: true }
    );

    const deleteQuiz = await createQuiz.findByIdAndDelete({ _id: quizId });

    res.status(200).json({
      sucess: true,
      message: "delete sucessfully",
      body: loginuser,
    });
  } catch (err) {
    res.status(500).json({
      sucess: false,
      message: "server error try later",
      error: err,
    });
  }
};
