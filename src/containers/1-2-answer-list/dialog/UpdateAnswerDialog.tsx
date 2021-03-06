/**
 * Created by jiangyukun on 2017/10/20.
 */
import React from 'react'
import Modal from 'wj-appcore/modal'
import {Row, Part, Line} from 'wj-appcore/layout'
import LimitTextArea from 'wj-appcore/form/limit/LimitTextArea'
import Form from 'wj-appcore/form/Form'
import Confirm from 'wj-appcore/common/Confirm'
import ConfirmOrClose from 'wj-appcore/common/ConfirmOrClose'
import {getDateTimeStr} from '../../../core/utils/dateUtils'

interface UpdateAnswerDialogProps {
  answerInfo: any
  updateAnswer: (options) => void
  updateAnswerSuccess: boolean
  onExited: () => void
}

class UpdateAnswerDialog extends React.Component<UpdateAnswerDialogProps> {
  answerId: string
  createDateTime: string
  updateDateTime: string
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

  updateAnswer = () => {
    this.props.updateAnswer({
      "answerId": this.answerId,
      "questionContent": this.state.question,
      "answerContent": this.state.answer,
      "remark": this.state.remark,
    })
  }

  componentWillMount() {
    this.answerId = this.props.answerInfo['answerId']
    this.createDateTime = getDateTimeStr(this.props.answerInfo['createTime'])
    this.updateDateTime = getDateTimeStr(this.props.answerInfo['updateTime'])
    this.setState({
      question: this.props.answerInfo['questionContent'] || '',
      answer: this.props.answerInfo['answerContent'] || '',
      remark: this.props.answerInfo['remark'] || '',
    })
  }

  componentWillReceiveProps(nextProps: UpdateAnswerDialogProps) {
    if (!this.props.updateAnswerSuccess && nextProps.updateAnswerSuccess) {
      this.close()
    }
  }

  render() {
    return (
      <Modal className="add-answer-dialog" show={this.state.show} onHide={this.close} onExited={this.props.onExited}>
        {
          this.state.showAddConfirm && (
            <Confirm message="确定更新回答吗？"
                     onExited={() => this.setState({showAddConfirm: false})}
                     onConfirm={this.updateAnswer}/>
          )
        }

        <Modal.Header closeButton={true}>
          <Modal.Title>编辑回答</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onValidChange={valid => this.setState({valid})}>
            <Row>
              <label>问题</label>
              <Part>
                <LimitTextArea
                  required={true} rows={5} name="question" placeholder="必填，最多不超过50字" limit={50} onExceed={() => null}
                  value={this.state.question} onChange={e => this.setState({question: e.target.value})}
                />
              </Part>
            </Row>

            <Line/>

            <Row>
              <label>回答</label>
              <Part>
                <LimitTextArea
                  rows={5} required={true} limit={200} name="answer" placeholder="必填，最多不超过200字" onExceed={() => null}
                  value={this.state.answer} onChange={e => this.setState({answer: e.target.value})}/>
              </Part>
            </Row>
            <Line/>

            <Row>
              <label>备注</label>
              <Part>
                <LimitTextArea
                  rows={5} placeholder="选填" limit={50} onExceed={() => null}
                  value={this.state.remark} onChange={e => this.setState({remark: e.target.value})}/>
              </Part>
            </Row>
          </Form>

          <div>
            <span>发布时间：{this.createDateTime}</span>
            <span className="ml15">更新时间：{this.updateDateTime}</span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <ConfirmOrClose
            disabled={!this.state.valid || this.state.remark.length > 50}
            onCancel={this.close}
            onConfirm={() => this.setState({showAddConfirm: true})}
          />
        </Modal.Footer>
      </Modal>
    )
  }
}

export default UpdateAnswerDialog
