from flask import Flask, jsonify, request, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/chatbot', methods=['POST'])
def chatbot_response():
    user_input = request.json.get('message')
    response = get_chatbot_response(user_input)
    return jsonify({"response": response})

def get_chatbot_response(user_input):
    responses = {
        "when does school start?": "School starts at 8:00 AM.",
        "when is the next holiday?": "The next holiday is on the 25th of December.",
        "how can I contact the principal?": "You can contact the principal via email at principal@school.com.",
        "what is the homework for today?": "Please check the school's online portal for today's homework.",
        "when are parent-teacher meetings?": "Parent-teacher meetings are scheduled for the first Monday of every month.",
        "bye": "Goodbye! If you have more questions, feel free to ask anytime!"
    }
    return responses.get(user_input.lower(), "I'm sorry, I don't understand that.")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
