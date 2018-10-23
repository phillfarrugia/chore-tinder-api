import { Router } from 'express'
import { show, update, remove } from './controller'

const router = new Router()

/**
 * @api {get} /schedule/:id Retrieve schedule
 * @apiName RetrieveSchedule
 * @apiGroup Schedule
 * @apiSuccess {Object} schedule Schedule's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Schedule not found.
 */
router.get('/:weekOfYear',
  show)

/**
 * @api {put} /schedule/:id Update schedule
 * @apiName UpdateSchedule
 * @apiGroup Schedule
 * @apiSuccess {Object} schedule Schedule's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Schedule not found.
 */
router.put('/:weekOfYear',
  update)

export default router
