/**
 * Created by jiangyukun on 2017/10/20.
 */
import React from 'react'
import Modal from 'wj-appcore/modal'
import {Row, Part, Line} from 'wj-appcore/layout'
import TextArea from 'wj-appcore/form/TextArea'
import Form from 'wj-appcore/form/Form'
import Confirm from 'wj-appcore/common/Confirm'
import ConfirmOrClose from 'wj-appcore/common/ConfirmOrClose'

interface AddAnswerDialogProps {
  addAnswer: (options) => void
  addAnswerSuccess: boolean
  onExited: () => void
}

class AddAnswerDialog extends React.Component<AddAnswerDialogProps> {
  state = {
    show: true,
    showAddConfirm: false,
    question: '',
    answer: '',
    remark: '',
    valid: true
  }

  close = () => {
    this.setState({show: false})
  }

  addAnswer = () => {
    this.props.addAnswer({
      "questionContent": this.state.question,
      "answerContent": this.state.question,
      "remark": this.state.question,
    })
  }

  componentWillReceiveProps(nextProps: AddAnswerDialogProps) {
    if (!this.props.addAnswerSuccess && nextProps.addAnswerSuccess) {
      this.close()
    }
  }

  render() {
    return (
      <Modal className="add-answer-dialog" show={this.state.show} onHide={this.close} onExited={this.props.onExited}>
        {
          this.state.showAddConfirm && (
            <Confirm message="确定添加回答吗？"
                     onExited={() => this.setState({showAddConfirm: false})}
                     onConfirm={this.addAnswer}/>
          )
        }

        <Modal.Header closeButton={true}>
          <Modal.Title>添加回答</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onValidChange={valid => this.setState({valid})}>
            <Row>
              <label>问题</label>
              <Part>
              <TextArea value={this.state.question} onChange={e => this.setState({question: e.target.value})}
                        required={true} rows={5} name="question"
              />
              </Part>
            </Row>

            <Line/>

            <Row>
              <label>回答</label>
              <Part>
              <TextArea
                rows={5} required={true} name="answer"
                value={this.state.answer} onChange={e => this.setState({answer: e.target.value})}/>
              </Part>
            </Row>
            <Line/>

            <Row>
              <label>备注</label>
              <Part>
              <TextArea
                rows={5}
                value={this.state.remark} onChange={e => this.setState({remark: e.target.value})}/>
              </Part>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <ConfirmOrClose
            disabled={!this.state.question || !this.state.answer}
            onCancel={this.close}
            onConfirm={() => this.setState({showAddConfirm: true})}
          />
        </Modal.Footer>
      </Modal>
    )
  }
}

export default AddAnswerDialog
