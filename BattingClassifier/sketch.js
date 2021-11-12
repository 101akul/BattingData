//global variable for model (for simplicty's sake)
let model;
function setup() {

	//putting The data into array form for tensorflow
	let inputs = [];
	let outputs = [];
	for(x in data)
	{
		let temp = data[x]
  	let arr = [];
		//assembling data for inputs from object
  	arr.push(temp["PA"])
  	arr.push(temp["GS"])
  	arr.push(temp["BA"])
  	arr.push(temp["SLG"])
  	arr.push(temp["BA"] + temp["BB"])
  	arr.push(temp["SO"])
  	arr.push(temp["HR"])
  	arr.push(temp["RBI"])

		inputs.push(arr);

		//assembling data from outputs for object
		outputs.push(temp["order"]);
	}

	//creating a 2D tensor from the inputs based off inputs array
	let xs = tf.tensor2d(inputs);
	console.log(xs.shape);

	//creating a 2D tensor from the outputs based off outputs array
	let ys = tf.tensor2d(outputs);
	console.log(ys.shape);

	//xs.print();
	//ys.print();

	//create a feed forward Neural Network
	model = tf.sequential();

	//create the layers (maybe add 1 more hidden and adjust activation Relu?)
	let hidden = tf.layers.dense({
		units: 12,
		activation: "sigmoid",
		inputShape: 8
	});

	let hidden2 = tf.layers.dense({
		units: 12,
		activation: "sigmoid",
		inputShape: 12
	});

	let output = tf.layers.dense({
		units: 9,
		activation: "sigmoid"
	});

	//adding layers to model
	model.add(hidden);
	model.add(hidden2);
	model.add(output);

	//creating a optimization function using sgd
	let learnR = 0.1;
	let optimizeFunc = tf.train.sgd(learnR);

	//compiling the model using softmax entropy
	model.compile({
		optimizer: optimizeFunc,
		loss: "meanSquaredError"
	});

	//training the model (adjust to create a better loss)
	train(xs, ys).then(results =>
	{
		console.log(results.history.loss)
	});
}

async function train(inputs, outputs)
{
	//fitting the model with specific options and training it using a
	//specific function
	let options =
	{
		epochs: 10,
		validationSplit: 0.1,
		shuffle: true,
		callbacks: {
			onTrainBegin: () => console.log("start"),
			onTrainEnd: () => console.log("end")
		}
	}
	return await model.fit(inputs,outputs, options);
}
